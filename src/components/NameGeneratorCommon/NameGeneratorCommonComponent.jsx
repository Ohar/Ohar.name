import React from "react"

import ContentGenerator from "@/components/ContentGenerator"
import PageTitle from "@/components/PageTitle"

import typeList from "./constants/typeList"

import generateCommonName from "./utils/generateName"

const NameGeneratorCommonComponent = () => (
  <section>
    <PageTitle>Генератор славянских и советских имён</PageTitle>
    <ContentGenerator
      generate={generateCommonName}
      typeList={typeList}
    />
  </section>
)

export default NameGeneratorCommonComponent
