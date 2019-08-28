import React from "react"
import PropTypes from "prop-types"

import DndActionList from "./components/DndActionList"
import DndCreatureAc from "./components/DndCreatureAc"
import DndCreatureAligment from "./components/DndCreatureAligment"
import DndCreatureCr from "./components/DndCreatureCr"
import DndCreatureHeader from "./components/DndCreatureHeader"
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
import DndVulnerabilityList from "./components/DndVulnerabilityList"

import "./DndCreatureStyles.less"

const DndCreatureComponent = (
  {
    actionList,
    aligmentId,
    armor,
    columnCount,
    cr,
    creatureTypeIdList,
    featureList,
    genderId,
    header,
    hp,
    id,
    immunityConditionList,
    immunityList,
    isFemale,
    languageList,
    legendaryActionList,
    legendaryPoints,
    name,
    params,
    reactionList,
    resistanceList,
    saveThrowCollection,
    senseList,
    sizeType,
    skillCollection,
    source,
    speed,
    spellCast,
    spellCastTogether,
    title,
    vulnerabilityList,
  },
) => (
  <section className={`DndCreature DndCreature-columnCount_${columnCount}`}>
    <DndCreatureHeader
      id={id}
      header={header}
      title={title}
    />

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
      <DndVulnerabilityList list={vulnerabilityList}/>
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
      spellCastTogether={spellCastTogether}
    />
    <DndActionList list={actionList}/>
    <DndLegendaryActionList
      list={legendaryActionList}
      name={name}
      points={legendaryPoints}
    />
    <DndReactionList list={reactionList}/>
  </section>
)

DndCreatureComponent.propTypes = {
  actionList: PropTypes.array,
  aligmentId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  armor: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
    PropTypes.shape({
      ac: PropTypes.number,
      type: PropTypes.string,
    }),
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
  title: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
  reactionList: PropTypes.array,
  saveThrowCollection: PropTypes.object,
  senseList: PropTypes.array,
  sizeType: PropTypes.string.isRequired,
  skillCollection: PropTypes.object,
  source: PropTypes.string.isRequired,
  speed: PropTypes.object.isRequired,
  spellCast: PropTypes.object,
  vulnerabilityList: PropTypes.array,
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
  reactionList: [],
  saveThrowCollection: null,
  senseList: [],
  skillCollection: null,
  spellCast: null,
  vulnerabilityList: [],
}

export default DndCreatureComponent
