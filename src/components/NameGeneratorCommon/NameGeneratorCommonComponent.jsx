import React from "react"

import NameGenerator from "@/components/NameGenerator"
import PageTitle from "@/components/PageTitle"

import typeList from "./constants/typeList"

import generateCommonName from "./utils/generateName"

const NameGeneratorCommonComponent = () => (
  <section>
    <PageTitle>Генератор славянских и советских имён</PageTitle>
    <NameGenerator
      generate={generateCommonName}
      typeList={typeList}
    />
  </section>
)

export default NameGeneratorCommonComponent
