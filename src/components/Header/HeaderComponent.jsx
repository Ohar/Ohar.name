import React from "react"

import Menu from "@/components/Menu"

import "./HeaderStyles.css"

const HeaderComponent = ({ hideHomeLink, hideLanguageSwitcher }) => (
  <header className="header">
    <Menu
      hideHomeLink={hideHomeLink}
      hideLanguageSwitcher={hideLanguageSwitcher}
    />
  </header>
)

export default HeaderComponent
