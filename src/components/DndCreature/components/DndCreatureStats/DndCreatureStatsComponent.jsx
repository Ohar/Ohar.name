import React from "react"
import PropTypes from "prop-types"

import DndActionList from "./components/DndActionList"
import DndCreatureAc from "./components/DndCreatureAc"
import DndCreatureAligment from "./components/DndCreatureAligment"
import DndCreatureCr from "./components/DndCreatureCr"
import DndCreatureExtender from "./components/DndCreatureExtender"
import DndCreatureHp from "./components/DndCreatureHp"
import DndCreatureSize from "./components/DndCreatureSize"
import DndCreatureSource from "./components/DndCreatureSource"
import DndCreatureSpeed from "./components/DndCreatureSpeed"
import DndCreatureType from "./components/DndCreatureType"
import DndFeatureList from "./components/DndFeatureList"
import DndImmunityConditionList from "./components/DndImmunityConditionList"
import DndImmunityList from "./components/DndImmunityList"
import DndLanguageList from "./components/DndLanguageList"
import DndLegendaryActionList from "./components/DndLegendaryActionList"
import DndParamList from "./components/DndParamList"
import DndReactionList from "./components/DndReactionList"
import DndResistanceList from "./components/DndResistanceList"
import DndSaveThrowCollection from "./components/DndSaveThrowCollection"
import DndSenseList from "./components/DndSenseList"
import DndSkillCollection from "./components/DndSkillCollection"
import DndVulnerabilityList from "./components/DndVulnerabilityList"

import "./DndCreatureStatsStyles.less"

const DndCreatureStatsComponent = (
  {
    creature,
    creature: {
      actionList = [],
      aligmentId,
      armor,
      cr,
      creatureTypeIdList,
      featureList = [],
      genderId,
      hp,
      immunityConditionList = [],
      immunityList = [],
      languageList = [],
      legendaryActionList = [],
      legendaryPoints = 0,
      name,
      params,
      reactionList = [],
      resistanceList = [],
      saveThrowCollection = null,
      senseList = [],
      skillCollection = null,
      source,
      speed,
      spellCast = null,
      spellCastTogether = null,
      vulnerabilityList = [],
    },
    columnCount,
    extendCreature,
  },
) => (
  <section className={`DndCreatureStats DndCreatureStats-columnCount_${columnCount}`}>
    <DndCreatureExtender
      className='DndCreatureStats_extender'
      creature={creature}
      callback={extendCreature}
    />
    <header className='DndCreatureStats_header'>
      {name}
    </header>

    <p className='DndCreatureStats_info'>
      <DndCreatureSize creature={creature} /> <DndCreatureType list={creatureTypeIdList}/>, <DndCreatureAligment creature={creature}/>
    </p>

    <section className='DndCreatureStats_infoBlock'>
      <DndCreatureAc armor={armor}/>
      <DndCreatureHp hp={hp}/>
      <DndCreatureSpeed speed={speed} />
    </section>

    <DndParamList
      className='DndCreatureStats_infoBlock'
      params={params}
    />

    <section className='DndCreatureStats_infoBlock'>
      <DndSaveThrowCollection collection={saveThrowCollection}/>
      <DndSkillCollection collection={skillCollection}/>
      <DndVulnerabilityList list={vulnerabilityList}/>
      <DndResistanceList list={resistanceList}/>
      <DndImmunityList list={immunityList}/>
      <DndImmunityConditionList list={immunityConditionList}/>
      <DndSenseList
        list={senseList}
        genderId={genderId}
      />
      <DndLanguageList list={languageList}/>
      <DndCreatureCr cr={cr}/>
      <DndCreatureSource source={source}/>
    </section>

    <DndFeatureList
      list={featureList}
      name={name}
      genderId={genderId}
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

DndCreatureStatsComponent.propTypes = {
  columnCount: PropTypes.number,
  creature: PropTypes.shape({
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
    cr: PropTypes.string.isRequired,
    creatureTypeIdList: PropTypes.array.isRequired,
    extendCreature: PropTypes.func,
    featureList: PropTypes.array,
    hp: PropTypes.object.isRequired,
    genderId: PropTypes.string.isRequired,
    immunityList: PropTypes.array,
    languageList: PropTypes.array,
    legendaryActionList: PropTypes.array,
    legendaryPoints: PropTypes.number,
    name: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired,
    reactionList: PropTypes.array,
    saveThrowCollection: PropTypes.object,
    senseList: PropTypes.array,
    skillCollection: PropTypes.object,
    source: PropTypes.PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]).isRequired,
    speed: PropTypes.object.isRequired,
    spellCast: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    spellCastTogether: PropTypes.object,
    vulnerabilityList: PropTypes.array,
  }).isRequired,
}

DndCreatureStatsComponent.defaultProps = {
  columnCount: 1,
  extendCreature: null,
}

export default DndCreatureStatsComponent
