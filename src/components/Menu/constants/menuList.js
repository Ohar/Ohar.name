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
    url: '/quotes',
    title: 'Всякие цитаты',
    iconClass: 'icon-quote-left',
    content: 'Цитаты',
  },
  {
    url: '/names',
    title: 'Славянские, советские и греческие имена из Википедии',
    content: 'Генератор имён',
  },
  {
    url: '/about',
    title: 'Связаться со мной',
    iconClass: 'icon-torso',
    content: 'Обо мне',
  },
  {
    url: '/articles',
    title: 'Статьи обо всяком',
    iconClass: 'icon-doc-text',
    content: 'Статьи',
  },
  {
    url: '/dnd',
    title: 'Dungeons & Dragons',
    iconClass: 'icon-magic',
    content: 'D&D',
  },
]

export default menuList
