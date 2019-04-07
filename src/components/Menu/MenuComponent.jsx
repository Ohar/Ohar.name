import { Link } from "gatsby"
import React from "react"

import ImgLogo from '@/images/logo.png'

import './MenuStyles.css'

const menuList = [
  {
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
    url: '/about',
    title: 'Связаться со мной',
    content: (
      <>
        <span className="icon-torso"/>
        Обо мне
      </>
    ),
  },
  {
    url: '/articles',
    title: 'Статьи обо всяком',
    content: 'Статьи',
  },
]

function isOuterLink(url) {
  return /^http/.test(url)
}

const MenuComponent = () => (
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
)

export default MenuComponent
