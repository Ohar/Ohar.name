import React from "react"

import generateCube from "@/utils/generateCube"

import DndCreatureInfo from "../DndCreatureInfo";

export default ({hp}) => (
  <DndCreatureInfo header='Хиты'>
    {generateCube(hp)}
  </DndCreatureInfo>
)
