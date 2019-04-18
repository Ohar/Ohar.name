import React from "react"

import ImgLogo from '@/images/logo.png'

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
    url: '/quotes',
    title: 'Всякие цитаты',
    content: (
      <span>
        <span className="icon-quote-left"/>
        Цитаты
      </span>
    ),
  },
  {
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

export default menuList
