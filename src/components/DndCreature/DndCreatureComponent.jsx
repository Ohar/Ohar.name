import React from "react"
import PropTypes from "prop-types"

import DndActionList from "./components/DndActionList"
import DndCreatureAc from "./components/DndCreatureAc"
import DndCreatureAligment from "./components/DndCreatureAligment"
import DndCreatureCr from "./components/DndCreatureCr"
import DndCreatureDescription from "./components/DndCreatureDescription"
import DndCreatureHp from "./components/DndCreatureHp"
import DndCreatureSource from "./components/DndCreatureSource"
import DndCreatureSpeed from "./components/DndCreatureSpeed"
import DndCreatureType from "./components/DndCreatureType"
import DndFeatureList from "./components/DndFeatureList"
import DndImmunityList from "./components/DndImmunityList"
import DndImmunityConditionList from "./components/DndImmunityConditionList"
import DndLanguageList from "./components/DndLanguageList"
import DndLegendaryActionList from "./components/DndLegendaryActionList"
import DndParamList from "./components/DndParamList"
import DndReactionList from "./components/DndReactionList"
import DndResistanceList from "./components/DndResistanceList"
import DndSaveThrowCollection from "./components/DndSaveThrowCollection"
import DndSenseList from "./components/DndSenseList"
import DndSkillCollection from "./components/DndSkillCollection"

import "./DndCreatureStyles.css"

const DndCreatureComponent = (
  {
    actionList,
    aligmentId,
    armor,
    columnCount,
    cr,
    creatureTypeIdList,
    description,
    featureList,
    hp,
    immunityList,
    immunityConditionList,
    isFemale,
    languageList,
    legendaryActionList,
    legendaryPoints,
    name,
    nameEn,
    params,
    resistanceList,
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
  <section className={`DndCreature DndCreature-columnCount_${columnCount}`}>
    <header className='DndCreature_name'>
      {name} [{nameEn}]
    </header>

    <p className='DndCreature_info'>
      {size}
      <DndCreatureType list={creatureTypeIdList}/>,
      <DndCreatureAligment aligmentId={aligmentId}/>
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
      <DndResistanceList list={resistanceList}/>
      <DndImmunityList list={immunityList}/>
      <DndImmunityConditionList list={immunityConditionList}/>
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
  aligmentId: PropTypes.string.isRequired,
  armor: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  columnCount: PropTypes.number,
  cr: PropTypes.string.isRequired,
  creatureTypeIdList: PropTypes.array.isRequired,
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

DndCreatureComponent.defaultProps = {
  actionList: [],
  columnCount: 1,
  description: '',
  featureList: [],
  immunityList: [],
  isFemale: false,
  languageList: [],
  legendaryActionList: [],
  legendaryPoints: 0,
  nameEn: '',
  reactionList: [],
  saveThrowCollection: null,
  senseList: [],
  skillCollection: null,
  spellCast: null,
}

export default DndCreatureComponent
