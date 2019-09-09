import React, { Component } from 'react'
import PropTypes from 'prop-types';

import extendCreature from '@/utils/extendCreature'

import checkInCollection from './utils/checkInCollection'

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
    const {creature} = this.props;

    return dndCreatureTemplateList.filter(
      ({templateName, templateLimitations: {include, exclude}}) => {
        const isSameTemplate = creature.templateName === templateName
        const shouldExclude = exclude
          ? !Object.keys(exclude).some(checkInCollection({creature, collection: exclude}))
          : false
        const shouldInclude = include
          ? Object.keys(include).every(checkInCollection({creature, collection: include}))
          : true

        return shouldInclude && !shouldExclude && !isSameTemplate
      }
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
