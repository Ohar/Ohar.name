import React from "react"
import PropTypes from "prop-types"

import PageTitle from "@/components/PageTitle"
import RadioGroup from "@/components/RadioGroup"
import RadioSet from "@/components/RadioSet"

import cityTypeList from "./constants/cityTypeList"
import shopTypeList from "./constants/shopTypeList"

import "./DndShopGeneratorStyles.css"

const DndShopGeneratorComponent = (
  {
    cityType,
    goodList,
    onChangeCityType,
    onChangeShopType,
    onGenerate,
    shopType,
  }
) => (
  <section className='DndShopGenerator'>
    <PageTitle>Генератор ассортимента магазинов</PageTitle>
    <RadioGroup>
      <RadioSet
        chosen={shopType}
        fieldList={shopTypeList}
        name='shopType'
        onChange={onChangeShopType}
        title='Тип магазина'
      />

      <RadioSet
        chosen={cityType}
        fieldList={cityTypeList}
        name='cityType'
        onChange={onChangeCityType}
        title='Тип поселения'
      />
    </RadioGroup>


    <button onClick={onGenerate}>
      Сгенерировать ассортимент магазина
    </button>
    {
      goodList.length
        ? (
          <ul>
            {
              goodList.map(
                (good, i) => (
                  <li key={i}>{JSON.stringify(good)}</li>
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
  onChangeCityType: PropTypes.func.isRequired,
  onChangeShopType: PropTypes.func.isRequired,
  onGenerate: PropTypes.func.isRequired,
  cityType: PropTypes.string.isRequired,
  shopType: PropTypes.string.isRequired,
}

export default DndShopGeneratorComponent
