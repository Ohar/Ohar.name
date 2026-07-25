const assert = require("node:assert/strict")
const { readFile } = require("node:fs/promises")
const path = require("node:path")
const test = require("node:test")

const {
  getPreferredLanguage,
  isLocalizedPath,
} = require("../src/utils/language")

const publicDir = path.resolve(__dirname, "..", "public")

test("browser language priority selects Russian only above English", () => {
  assert.equal(getPreferredLanguage(["ru-RU", "en-US"]), "ru")
  assert.equal(getPreferredLanguage(["en-US", "ru-RU"]), "en")
  assert.equal(getPreferredLanguage(["de-DE", "ru-RU"]), "ru")
  assert.equal(getPreferredLanguage(["de-DE", "en-US"]), "en")
  assert.equal(getPreferredLanguage(["de-DE"]), "en")
  assert.equal(getPreferredLanguage([]), "en")
})

test("only explicitly excluded content sections remain Russian-only", () => {
  for (const pathname of [
    "/articles",
    "/articles/funny-js/",
    "/dw/",
    "/dw/alchemist/",
    "/quotes/",
    "/quotes/42/",
  ]) {
    assert.equal(isLocalizedPath(pathname), false, pathname)
  }

  for (const pathname of [
    "/",
    "/about/",
    "/cv/",
    "/portfolio/",
    "/tc/",
    "/missing/",
  ]) {
    assert.equal(isLocalizedPath(pathname), true, pathname)
  }
})

test("static HTML defaults to English only on localized pages", async () => {
  const pages = [
    ["index.html", "en", "Pavel Lysenko"],
    ["about/index.html", "en", "Elsewhere online"],
    ["portfolio/index.html", "en", "Projects and applications"],
    ["cv/index.html", "en", "Lead Frontend Developer"],
    ["tc/index.html", "en", "Trench Crusade: Heretic Legion"],
    ["404/index.html", "en", "This page does not exist"],
    ["articles/index.html", "ru", "Статьи"],
    ["dw/index.html", "ru", "Dungeon World"],
    ["quotes/index.html", "ru", "Случайная цитата"],
  ]

  for (const [relativePath, language, expectedText] of pages) {
    const html = await readFile(path.join(publicDir, relativePath), "utf8")

    assert.match(html, new RegExp(`<html[^>]+lang="${language}"`), relativePath)
    assert.ok(
      html.includes(expectedText),
      `${relativePath} must contain ${expectedText}`
    )
  }
})

test("localized metadata and Russian-only links are explicit", async () => {
  const home = await readFile(path.join(publicDir, "index.html"), "utf8")
  const about = await readFile(path.join(publicDir, "about/index.html"), "utf8")
  const notFound = await readFile(
    path.join(publicDir, "404/index.html"),
    "utf8"
  )

  assert.match(home, /property="og:title" content="Ohar"/)
  assert.match(about, /hrefLang="ru"/)
  assert.match(notFound, /name="robots" content="noindex, follow"/)
})
