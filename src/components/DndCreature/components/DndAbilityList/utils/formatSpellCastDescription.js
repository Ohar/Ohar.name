import formatBonus from "@/utils/formatBonus";

import {dndPcClassCollection} from '@/constants/dnd/dndPcClassList'
import {dndParamCollection} from '@/constants/dnd/dndParamList'

export default (
  {
    spellCast: {
      baseStat,
      saveThrowDc,
      spellAttackBonus,
      spellCasterClass,
      spellCasterLevel,
    },
    isFemale,
    name,
  }
) => {
  const statName = dndParamCollection[baseStat].name
  const bonusText = formatBonus(spellAttackBonus)
  const className = dndPcClassCollection[spellCasterClass].name.singular.genitive

  return `${name} является заклинателем ${spellCasterLevel} уровня. ${isFemale ? 'Её' : 'Его'} базовой характеристикой является ${statName} (Сл спасброска от заклинания ${saveThrowDc}, ${bonusText} к попаданию атаками заклинаниями). У ${isFemale ? 'неё' : 'него'}  приготовлены следующие заклинания ${className}:`
}
