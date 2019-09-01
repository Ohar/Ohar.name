import React, { Component } from 'react'
import PropTypes from 'prop-types';

import extendCreature from '@/utils/extendCreature'

import dndCreatureTemplateList from './constants/dndCreatureTemplateList'

import DndCreatureExtenderComponent from './DndCreatureExtenderComponent'

class DndCreatureExtenderContainer extends Component {
  extend = template => {
    const {creature, callback} = this.props
    const name = template.templateCreatureName.replace('NAME', creature.name)
    const extendedCreature = extendCreature({
      parent: creature,
      creature: template,
    })

    callback({
      ...creature,
      ...extendedCreature,
      name,
    })
  }

  filterAvailableTemplates = () => {
    const {creature} = this.props

    return dndCreatureTemplateList.filter(
      ({extendLimitations}) => !Object
        .keys(extendLimitations)
        .find(
          propName => {
            switch (propName) {
              // Special case for “sizeTypeList”, bcz it has different name on “creature” obj
              case 'sizeTypeList': {
                return !extendLimitations.sizeTypeList.includes(creature.sizeType)
              }

              default: {
                return !(
                  Array.isArray(creature[propName])
                    ? creature[propName].every(
                      creatureTypeId => extendLimitations[propName].includes(creatureTypeId)
                    )
                    : extendLimitations[propName].includes(creature[propName])
                )
              }
            }
          }
        )
    )
  }

  render () {
    const {creature, ...rest} = this.props

    if (creature) {
      const availableTemplateList = this.filterAvailableTemplates()

      return availableTemplateList.length
        ? (
          <DndCreatureExtenderComponent
            creature={creature}
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
