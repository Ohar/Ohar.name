import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { dndAligmentCollection } from '@/constants/dnd/dndAligmentList'
import { dndItemCollection } from '@/constants/dnd/dndItemList'
import { dndParamCollection } from '@/constants/dnd/dndParamList'

import DndSentientItemComponent from './DndSentientItemComponent'

export default class DndSentientItemContainer extends Component {
  static propTypes = {
    item: PropTypes.shape({
      aligmentId: PropTypes.string,
      bond: PropTypes.string,
      char: PropTypes.string,
      communication: PropTypes.string,
      creator: PropTypes.string,
      goal: PropTypes.string,
      ideal: PropTypes.string,
      interactions: PropTypes.string,
      manner: PropTypes.string,
      name: PropTypes.string,
      senses: PropTypes.string,
      stats: PropTypes.string,
      type: PropTypes.string,
      weakness: PropTypes.string,
    }),
  }

  static defaultProps = {
    item: null,
  }

  render() {
    const { item } = this.props

    if (item) {
      const {
        aligmentId,
        bizzare,
        bond,
        char,
        communication,
        creator,
        goal,
        ideal,
        interactions,
        lesserAbility,
        manner,
        name,
        senses,
        stats,
        story,
        type,
        weakness,
      } = item

      const {
        name: typeName,
        description: typeDescription,
        category: typeCategory,
        subcategory,
      } = dndItemCollection[type]

      const typeSubcategory = subcategory
        ? ` — ${subcategory}`
        : ''

      const itemDataList = [
        {
          header: 'Название',
          content: name,
        },
        {
          title: `${typeCategory} ${typeSubcategory}\n${typeDescription}`,
          header: 'Тип предмета',
          content: typeName,
        },
        {
          header: 'Параметры',
          content: stats
            .map(
              ({ id, value }) => `* ${dndParamCollection[id].shortName} ${value}`,
            )
            .join('\n'),
        },
        {
          header: 'Черты характера',
          content: `${char.good}, но ${char.bad}.`,
        },
        {
          header: 'Мировоззрение',
          content: dndAligmentCollection[aligmentId].name.nominative,
        },
        {
          header: 'Чувства',
          content: senses,
        },
        {
          header: 'Общение',
          content: interactions.description,
        },
        {
          header: 'Предназначение',
          content: goal,
        },
        {
          header: 'Манеры',
          content: manner,
        },
        {
          header: 'Идеал',
          content: ideal,
        },
        {
          header: 'Особенности',
          content: communication,
        },
        {
          header: 'Привязанность',
          content: bond,
        },
        {
          header: 'Слабость или тайна',
          content: weakness,
        },
        {
          headerTitle: 'Кем или для кого он создан?',
          header: 'Создатель или предполагаемый владелец',
          content: creator,
        },
        {
          headerTitle: 'Детали его истории?',
          header: 'История',
          content: story,
        },
        {
          headerTitle: 'Каким малым свойством обладает предмет?',
          header: 'Малое свойство',
          content: lesserAbility,
        },
        {
          headerTitle: 'Какими еще причудливыми особенностями обладает предмет?',
          header: 'Причудливая особенность',
          content: bizzare,
        },
      ]

      return (
        <DndSentientItemComponent itemDataList={itemDataList}/>
      )
    }

    return null
  }
}
