import { Link } from "gatsby"
import React from "react"

import isOuterLink from './utils/isOuterLink'

import './MenuLinkStyles.css'

const MenuLinkComponent = ({url, title, content, children}) => isOuterLink(url)
  ? (
    <a
      className="MenuLink"
      href={url}
      title={title || content}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {children}
    </a>
  )
  : (
    <Link
      className="MenuLink"
      to={url}
      title={title || content}
    >
      {children}
    </Link>
  )

export default MenuLinkComponent
