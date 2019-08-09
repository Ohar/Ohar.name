import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown";

import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"
import {dndSizeCollection} from "@/constants/dnd/dndSizeList"

import DndActionList from "./components/DndActionList"
import DndCreatureAc from "./components/DndCreatureAc"
import DndCreatureCr from "./components/DndCreatureCr"
import DndCreatureHp from "./components/DndCreatureHp"
import DndCreatureSource from "./components/DndCreatureSource"
import DndCreatureSpeed from "./components/DndCreatureSpeed"
import DndFeatureList from "./components/DndFeatureList"
import DndLanguageList from "./components/DndLanguageList"
import DndParamList from "./components/DndParamList"
import DndReactionList from "./components/DndReactionList"
import DndSenseList from "./components/DndSenseList"
import DndSkillCollection from "./components/DndSkillCollection"

import getCreatureTypeName from "./utils/getCreatureTypeName"

import "./DndCreatureStyles.css"

const DndCreatureComponent = (
  {
    creature: {
      actionList,
      aligmentId,
      armor,
      cr,
      creatureTypeIdList,
      description,
      featureList,
      hp,
      languageList,
      name,
      nameEn,
      params,
      reactionList,
      senseList,
      sizeType,
      skillCollection,
      source,
      speed,
    },
  },
) => {
  const size = dndSizeCollection[sizeType].name
  const aligment = dndAligmentCollection[aligmentId].name.nominative
  const creatureType = [
    getCreatureTypeName(creatureTypeIdList[0]),
    creatureTypeIdList.length > 1
      ? creatureTypeIdList
        .slice(1)
        .map(getCreatureTypeName)
        .join(', ')
        .replace(/^/, '(')
        .replace(/$/, ')')
      : ''
  ]
    .filter(e => e)
    .join(' ')

  return (
    <section className='DndCreature'>
      <header className='DndCreature_name'>
        {name} [{nameEn}]
      </header>

      <p className='DndCreature_info'>
        {size} {creatureType}, {aligment}
      </p>

      <section className='DndCreature_infoBlock'>
        <DndCreatureAc armor={armor}/>
        <DndCreatureHp hp={hp}/>
        <DndCreatureSpeed speed={speed} />
      </section>

      <DndParamList
        className='DndCreature_infoBlock'
        params={params}
      />

      <section className='DndCreature_infoBlock'>
        <DndSkillCollection collection={skillCollection}/>
        <DndSenseList list={senseList}/>
        <DndLanguageList list={languageList}/>
        <DndCreatureCr cr={cr}/>
        <DndCreatureSource source={source}/>
      </section>

      <DndFeatureList list={featureList}/>
      <DndActionList list={actionList}/>
      <DndReactionList list={reactionList}/>

      <ReactMarkdown className='DndCreature_description'>
        {description}
      </ReactMarkdown>
    </section>
  )
}

DndCreatureComponent.propTypes = {
  creature: PropTypes.object.isRequired,
}

export default DndCreatureComponent
