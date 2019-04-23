import React from "react"

import NameGenerator from "@/components/NameGenerator"

import typeList from "./constants/typeList"

import generateCommonName from "./utils/generateName"

const NameGeneratorCommonComponent = () => (
  <NameGenerator
    generate={generateCommonName}
    typeList={typeList}
  />
)

export default NameGeneratorCommonComponent
