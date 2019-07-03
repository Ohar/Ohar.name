import React from "react"

import { faDAndD } from '@fortawesome/free-brands-svg-icons'

import ImgLogo from '@/images/logo.png'

const menuList = [
  {
    url: '/',
    title: 'На главную',
    content: (
      <img
        className="MenuLink_img"
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
    icon: 'icon-quote-left',
    content: 'Цитаты',
  },
  {
    url: '/about',
    title: 'Связаться со мной',
    icon: 'icon-torso',
    content: 'Обо мне',
  },
  {
    url: '/articles',
    title: 'Статьи обо всяком',
    icon: 'icon-doc-text',
    content: 'Статьи',
  },
  {
    url: '/dnd',
    title: 'Dungeons & Dragons',
    icon: faDAndD,
    content: 'D&D',
  },
]

export default menuList
