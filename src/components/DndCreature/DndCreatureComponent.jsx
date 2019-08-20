import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'

import generateCreaturePageUrlById from "@/utils/generateCreaturePageUrlById"

import DndActionList from "./components/DndActionList"
import DndCreatureAc from "./components/DndCreatureAc"
import DndCreatureAligment from "./components/DndCreatureAligment"
import DndCreatureCr from "./components/DndCreatureCr"
import DndCreatureDescription from "./components/DndCreatureDescription"
import DndCreatureHp from "./components/DndCreatureHp"
import DndCreatureSize from "./components/DndCreatureSize"
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

import "./DndCreatureStyles.less"

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
    genderId,
    hp,
    id,
    immunityList,
    immunityConditionList,
    isFemale,
    languageList,
    legendaryActionList,
    legendaryPoints,
    name,
    nameAlt,
    nameEn,
    nameEnAlt,
    params,
    resistanceList,
    reactionList,
    saveThrowCollection,
    senseList,
    sizeType,
    skillCollection,
    source,
    speed,
    spellCast,
  },
) => (
  <section className={`DndCreature DndCreature-columnCount_${columnCount}`}>
    <Link
      to={generateCreaturePageUrlById(id)}
      className='DndCreature_name'
    >
      {name} {nameAlt ? `(${nameAlt}) ` : ''}[{nameEn}{nameEnAlt ? ` (${nameEnAlt})` : ''}]
    </Link>

    <p className='DndCreature_info'>
      <DndCreatureSize
        genderId={genderId}
        sizeType={sizeType}
      /> <DndCreatureType
      list={creatureTypeIdList}
    />, <DndCreatureAligment
      aligmentId={aligmentId}
    />
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
  genderId: PropTypes.string.isRequired,
  hp: PropTypes.object.isRequired,
  immunityList: PropTypes.array,
  isFemale: PropTypes.bool,
  languageList: PropTypes.array,
  legendaryActionList: PropTypes.array,
  legendaryPoints: PropTypes.number,
  name: PropTypes.string.isRequired,
  nameAlt: PropTypes.string,
  nameEn: PropTypes.string,
  nameEnAlt: PropTypes.string,
  params: PropTypes.object.isRequired,
  reactionList: PropTypes.array,
  saveThrowCollection: PropTypes.object,
  senseList: PropTypes.array,
  sizeType: PropTypes.string.isRequired,
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
  nameAlt: '',
  nameEn: '',
  nameEnAlt: '',
  reactionList: [],
  saveThrowCollection: null,
  senseList: [],
  skillCollection: null,
  spellCast: null,
}

export default DndCreatureComponent
