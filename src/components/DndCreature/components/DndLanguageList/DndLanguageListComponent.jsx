import React from "react"

import DndCreatureInfo from "./../DndCreatureInfo";
import formatComplexLang from "./utils/formatComplexLang";

export default ({list}) => (
  <DndCreatureInfo header='Языки'>
    {
      list
        .map(formatComplexLang)
        .join(', ')
    }
  </DndCreatureInfo>
)
