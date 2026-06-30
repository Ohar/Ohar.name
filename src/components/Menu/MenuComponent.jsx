import React from "react"

import Icon from '@/components/Icon'
import MenuLink from '@/components/MenuLink'

import menuList from './constants/menuList'

import './MenuStyles.css'

const MenuComponent = ({ hideHomeLink }) => (
  <nav className="menu">
    <ul className="menu_list">
      {
        menuList
          .filter(({url}) => !(hideHomeLink && url === '/'))
          .map(
          ({url, title, content, icon, faIcon}) => (
            <li
              key={url}
              className={icon ? 'menu_list_item menu_list_item--explicit-icon' : 'menu_list_item'}
            >
              <MenuLink
                url={url}
                title={title}
                content={content}
              >
                <Icon icon={icon}/>
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
