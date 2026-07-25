import React from "react"

import LanguageProvider from "./src/components/LanguageProvider"

export const wrapPageElement = ({ element, props }) => (
  <LanguageProvider pathname={props.location.pathname}>
    {element}
  </LanguageProvider>
)
