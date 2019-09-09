import React, { Component } from 'react'
import PropTypes from 'prop-types';
import arrify from "arrify"

import extendCreature from '@/utils/extendCreature'

import dndCreatureTemplateList from './constants/dndCreatureTemplateList'

import DndCreatureExtenderComponent from './DndCreatureExtenderComponent'

class DndCreatureExtenderContainer extends Component {
  extend = template => {
    const {creature, callback} = this.props

    callback(extendCreature({
      parent: creature,
      creature: template,
    }))
  }

  filterAvailableTemplates = () => {
    const {creature} = this.props

    return dndCreatureTemplateList.filter(
      ({extendLimitations}) => Object
        .keys(extendLimitations)
        .every(
          propName => {
            switch (propName) {
              // Special case for “sizeTypeList”, bcz it has different name on “creature” obj
              case 'sizeTypeList': {
                return extendLimitations.sizeTypeList.includes(creature.sizeType)
              }

              case 'creatureIdList': {
                return extendLimitations.creatureIdList.includes(creature.id)
              }

              default: {
                return arrify(creature[propName]).every(
                  id => extendLimitations[propName].includes(id)
                )
              }
            }
          }
        )
    )
  }

  render () {
    const {creature, callback, ...rest} = this.props

    if (creature && callback) {
      const availableTemplateList = this.filterAvailableTemplates()

      return availableTemplateList.length
        ? (
          <DndCreatureExtenderComponent
            list={availableTemplateList}
            extend={this.extend}
            {...rest}
          />
        )
        : null
    }

    return null
  }
}

DndCreatureExtenderContainer.defaultProps = {
  creature: null,
}

DndCreatureExtenderContainer.propTypes = {
  callback: PropTypes.func.isRequired,
  creature: PropTypes.object,
}

export default DndCreatureExtenderContainer
