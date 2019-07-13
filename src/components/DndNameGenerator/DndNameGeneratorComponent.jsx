import React from "react"

import ContentGenerator from "@/components/ContentGenerator"
import PageTitle from "@/components/PageTitle"

import typeList from "./constants/typeList"

import generateFullName from "./utils/generateFullName"

const DndNameGeneratorComponent = () => (
  <section>
    <PageTitle>Генератор имён для D&D</PageTitle>
    <ContentGenerator
      generate={generateFullName}
      typeList={typeList}
    />
  </section>
)

export default DndNameGeneratorComponent
