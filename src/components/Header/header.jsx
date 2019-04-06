import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ImgLogo from '@/images/logo.png'

import './menu.css'
import './header.css'

const menuList = [
  {
    gatsbyReady: false,
    url: '/',
    title: 'На главную',
    content: (
      <img
        className="menu_list_item_link_img"
        src={ImgLogo}
        alt="Adeptus Mechanicus"
        width="48"
        height="48"
      />
    ),
  },
  {
    gatsbyReady: false,
    url: 'https://github.com/Ohar/',
    title: 'Профиль на GitHub',
    content: 'GitHub',
  },
  {
    gatsbyReady: false,
    url: '/life',
    title: 'Поиграть в «Жизнь»',
    content: 'Игра «Жизнь»',
  },
  {
    gatsbyReady: false,
    url: '/rules',
    title: 'Правила оформления текстов на русском языке',
    content: 'Оформлениe текстов',
  },
  {
    gatsbyReady: false,
    url: '/quotes/#0',
    title: 'Всякие цитаты',
    content: (
      <span>
        <span className="icon-quote-left"/>
        Цитаты
      </span>
    ),
  },
  {
    gatsbyReady: false,
    url: '/names',
    title: 'Славянские, советские и греческие имена из Википедии',
    content: 'Генератор имён',
  },
  {
    gatsbyReady: false,
    url: '/about',
    title: 'Связаться со мной',
    content: (
      <span>
        <span className="icon-torso"/>
        Обо мне
      </span>
    ),
  },
  {
    gatsbyReady: false,
    url: '/funny_js',
    content: 'Минутка занимательного яваскрипта',
  },
]

function isOuterLink(url) {
  return /^http/.test(url)
}

const Header = () => (
  <header className="header">
    <nav className="menu">
      <ul className="menu_list">
        {
          menuList.map(
            ({url, title, content, gatsbyReady}) => (
              <li
                key={url}
                className="menu_list_item"
              >
                {
                  !gatsbyReady && isOuterLink(url)
                    ? (
                      <a
                        className="menu_list_item_link"
                        href={url}
                        title={title || content}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        {content}
                      </a>
                    )
                    : (
                      <Link
                        className="menu_list_item_link"
                        to={url}
                        title={title || content}
                      >
                        {content}
                      </Link>
                    )
                }
              </li>
            )
          )
        }
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
