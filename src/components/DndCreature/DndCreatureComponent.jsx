import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown";
import classNames from "classnames";

import DndActionList from "./components/DndActionList"
import DndCreatureAc from "./components/DndCreatureAc"
import DndCreatureCr from "./components/DndCreatureCr"
import DndCreatureDescription from "./components/DndCreatureDescription"
import DndCreatureHp from "./components/DndCreatureHp"
import DndCreatureSource from "./components/DndCreatureSource"
import DndCreatureSpeed from "./components/DndCreatureSpeed"
import DndFeatureList from "./components/DndFeatureList"
import DndImmunityList from "./components/DndImmunityList"
import DndLanguageList from "./components/DndLanguageList"
import DndLegendaryActionList from "./components/DndLegendaryActionList"
import DndParamList from "./components/DndParamList"
import DndReactionList from "./components/DndReactionList"
import DndSaveThrowCollection from "./components/DndSaveThrowCollection"
import DndSenseList from "./components/DndSenseList"
import DndSkillCollection from "./components/DndSkillCollection"

import "./DndCreatureStyles.css"

const DndCreatureComponent = (
  {
    actionList,
    aligment,
    armor,
    cr,
    creatureType,
    description,
    featureList,
    hp,
    immunityList,
    isFemale,
    languageList,
    legendaryActionList,
    legendaryPoints,
    name,
    nameEn,
    params,
    reactionList,
    saveThrowCollection,
    senseList,
    size,
    skillCollection,
    source,
    speed,
    spellCast,
  },
) => (
  <section className={classNames(
    'DndCreature',
    {
      'DndCreature-twoColumns': legendaryPoints,
    }
  )}>
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
      <DndSaveThrowCollection collection={saveThrowCollection}/>
      <DndSkillCollection collection={skillCollection}/>
      <DndImmunityList list={immunityList}/>
      <DndSenseList list={senseList}/>
      <DndLanguageList list={languageList}/>
      <DndCreatureCr cr={cr}/>
      <DndCreatureSource source={source}/>
    </section>

    <DndFeatureList
      list={featureList}
      name={name}
      isFemale={isFemale}
      spellCast={spellCast}
    />
    <DndActionList list={actionList}/>
    <DndLegendaryActionList
      list={legendaryActionList}
      name={name}
      points={legendaryPoints}
    />
    <DndReactionList list={reactionList}/>
    <DndCreatureDescription description={description}/>
  </section>
)

DndCreatureComponent.propTypes = {
  actionList: PropTypes.array,
  aligment: PropTypes.string.isRequired,
  armor: PropTypes.object.isRequired,
  cr: PropTypes.string.isRequired,
  creatureType: PropTypes.string.isRequired,
  description: PropTypes.string,
  featureList: PropTypes.array,
  hp: PropTypes.object.isRequired,
  immunityList: PropTypes.array,
  isFemale: PropTypes.bool,
  languageList: PropTypes.array,
  legendaryActionList: PropTypes.array,
  legendaryPoints: PropTypes.number,
  name: PropTypes.string.isRequired,
  nameEn: PropTypes.string,
  params: PropTypes.object.isRequired,
  reactionList: PropTypes.array,
  saveThrowCollection: PropTypes.object,
  senseList: PropTypes.array,
  size: PropTypes.string.isRequired,
  skillCollection: PropTypes.object,
  source: PropTypes.string.isRequired,
  speed: PropTypes.object.isRequired,
  spellCast: PropTypes.object,
}

export default DndCreatureComponent
