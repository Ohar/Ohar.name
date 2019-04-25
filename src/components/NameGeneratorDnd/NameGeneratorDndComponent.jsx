import React from "react"

import ContentGenerator from "@/components/ContentGenerator"
import PageTitle from "@/components/PageTitle"

import typeList from "./constants/typeList"

import generateName from "./chult/utils/generateName"

const NameGeneratorDndComponent = () => (
  <section>
    <PageTitle>Генератор имён для D&D</PageTitle>
    <ContentGenerator
      generate={generateName}
      typeList={typeList}
    />
  </section>
)

export default NameGeneratorDndComponent
