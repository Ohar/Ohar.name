import React from "react"
import PropTypes from "prop-types"

import RadioSet from "@/components/RadioSet"

import "./ContentGeneratorStyles.css"

const ContentGeneratorComponent = (
  {
    onChangeRadio,
    onGenerate,
    result,
    typeList,
  },
) => (
  <section className='ContentGenerator'>
    <ul className='ContentGenerator_list'>
      {
        typeList.map(
          ({type, title, chosen, list}) => (
            <li
              key={type}
              className='ContentGenerator_item'
            >
              <RadioSet
                chosen={chosen}
                fieldList={list.filter(({visible}) => visible)}
                name={type}
                onChange={onChangeRadio(type)}
                title={title}
              />
            </li>
          )
        )
      }
    </ul>

    <button
      className='ContentGenerator_btn'
      type='button'
      onClick={onGenerate}
    >
      Сгенерить
    </button>

    <input
      className='ContentGenerator_result'
      type='text'
      value={result}
      readOnly
    />
  </section>
)

ContentGeneratorComponent.propTypes = {
  typeList: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    chosen: PropTypes.string,
    list: PropTypes.array,
  })),
  result: PropTypes.string,
  onChangeRadio: PropTypes.func.isRequired,
  onGenerate: PropTypes.func.isRequired,
}

ContentGeneratorComponent.defaultProps = {
  result: '',
}

export default ContentGeneratorComponent
