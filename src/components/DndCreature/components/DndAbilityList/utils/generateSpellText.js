import { dndSpellCollection } from '@/constants/dnd/dndSpellList'

import generateSpellTextByCount from './generateSpellTextByCount'
import generateSpellTextByLvl from './generateSpellTextByLvl'

export default (
  {
    slotCountList,
    spellIdList,
    spellIdByCountList,
  }
) => {
  if (spellIdByCountList) {
    return generateSpellTextByCount(spellIdByCountList)
  }

  if (slotCountList && spellIdList) {
    const spellList = spellIdList.map(id => dndSpellCollection[id])

    return generateSpellTextByLvl({slotCountList, spellList})
  }

  return ''
}
