import React from "react"

import MenuIcon from '@/components/MenuIcon'
import MenuLink from '@/components/MenuLink'

import menuList from './constants/menuList'

import './MenuStyles.css'

const MenuComponent = () => (
  <nav className="menu">
    <ul className="menu_list">
      {
        menuList.map(
          ({url, title, content, icon, faIcon}) => (
            <li
              key={url}
              className="menu_list_item"
            >
              <MenuLink
                url={url}
                title={title}
                content={content}
              >
                <MenuIcon icon={icon}/>
                {content}
              </MenuLink>
            </li>
          )
        )
      }
    </ul>
  </nav>
)

export default MenuComponent
