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
    return generateSpellTextByLvl({slotCountList, spellIdList})
  }

  return ''
}
