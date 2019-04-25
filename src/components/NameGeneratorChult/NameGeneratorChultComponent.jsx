import React from "react"

import ContentGenerator from "@/components/ContentGenerator"
import PageTitle from "@/components/PageTitle"

import typeList from "./constants/typeList"

import generateName from "./utils/generateName"

const NameGeneratorChultComponent = () => (
  <section>
    <PageTitle>Генератор имён чультов</PageTitle>
    <ContentGenerator
      generate={generateName}
      typeList={typeList}
    />
  </section>
)

export default NameGeneratorChultComponent
