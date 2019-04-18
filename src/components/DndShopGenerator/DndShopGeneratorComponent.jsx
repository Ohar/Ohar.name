import React from "react"
import PropTypes from "prop-types"

import RadioSet from "@/components/RadioSet"

import typeFieldList from "./constants/typeFieldList"

import "./DndShopGeneratorStyles.css"

const DndShopGeneratorComponent = (
  {
    goodList,
    onChangeType,
    onGenerate,
    type,
  }
) => (
  <section className='DndShopGenerator'>
    <header>Генератор ассортимента магазинов</header>
    <RadioSet
      chosen={type}
      fieldList={typeFieldList}
      name='type'
      onChange={onChangeType}
      title='Тип магазина'
    />
    <button onClick={onGenerate}>Сгенерировать ассортимент магазина</button>
    {
      goodList.length
        ? (
          <ul>
            {
              goodList.map(
                (good, i) => (
                  <li key={i}>{good}</li>
                )
              )
            }
          </ul>
        )
        : null
    }
  </section>
)

DndShopGeneratorComponent.propTypes = {
  goodList: PropTypes.array.isRequired,
  onChangeType: PropTypes.func.isRequired,
  onGenerate: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default DndShopGeneratorComponent
