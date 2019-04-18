const path = require("path")

const quotesList = require("./src/constants/quotesList")

const QuotePageTemplate = path.resolve(`./src/templates/QuotePageTemplate.jsx`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  return new Promise(
    resolve => {
      resolve(
        quotesList.forEach(
          (quote, id) => {
            createPage(
              {
                path: `/quotes/${id}`,
                component: QuotePageTemplate,
                context: {
                  slug: id,
                },
              },
            )
          },
        ),
      )
    },
  )
    .catch(
      e => console.error("Fail createPages", e),
    )
}

