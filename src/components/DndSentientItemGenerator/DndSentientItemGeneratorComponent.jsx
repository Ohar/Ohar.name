import React from "react"

import PageTitle from "@/components/PageTitle"
import BtnGenerate from "@/components/BtnGenerate"
import DndSentientItem from "./components/DndSentientItem"

import "./DndSentientItemGeneratorStyles.css"

const DndSentientItemGeneratorComponent = ({ item, onGenerate }) => (
  <section className='DndSentientItemGenerator'>
    <PageTitle>Генератор разумных магических предметов</PageTitle>
    <DndSentientItem item={item}/>
    <BtnGenerate
      className='DndSentientItemGenerator_btn'
      onClick={onGenerate}
    />
  </section>
)

export default DndSentientItemGeneratorComponent
