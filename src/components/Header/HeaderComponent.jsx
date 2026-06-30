import React from "react"

import Menu from "@/components/Menu"

import "./HeaderStyles.css"

const HeaderComponent = ({ hideHomeLink }) => (
  <header className="header">
    <Menu hideHomeLink={hideHomeLink}/>
  </header>
)

export default HeaderComponent
