import { Link } from "gatsby"
import React from "react"

import menuList from './constants/menuList'
import isOuterLink from './utils/isOuterLink'
import MenuIcon from './components/MenuIcon'

import './MenuStyles.css'

const MenuComponent = () => (
  <nav className="menu">
    <ul className="menu_list">
      {
        menuList.map(
          ({url, title, content, gatsbyReady, iconClass}) => (
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
                      <MenuIcon iconClass={iconClass}/>
                      {content}
                    </a>
                  )
                  : (
                    <Link
                      className="menu_list_item_link"
                      to={url}
                      title={title || content}
                    >
                      <MenuIcon iconClass={iconClass}/>
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
