import React from "react"

import NameGenerator from "@/components/NameGenerator"
import PageTitle from "@/components/PageTitle"

import typeList from "./constants/typeList"

import generateName from "./utils/generateName"

const NameGeneratorChultComponent = () => (
  <section>
    <PageTitle>Генератор имён чультов</PageTitle>
    <NameGenerator
      generate={generateName}
      typeList={typeList}
    />
  </section>
)

export default NameGeneratorChultComponent
