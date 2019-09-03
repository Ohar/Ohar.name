import {
  ACTION_MELEE_WEAPON_ATTACK,
  ACTION_MELEE_SPELL_ATTACK,
  ACTION_RANGE_WEAPON_ATTACK,
  ACTION_RANGE_SPELL_ATTACK,
} from '@/constants/dnd/dndActionTypeList'

const formatMelee = range => `досягаемость ${range} фт.`
const formatRange = ({normal, max}) => `дистанция ${normal}/${max} фт.`
const formatRangeSpell = range => `дистанция ${range} фт.`

export default ({type, range}) => {
  switch (type) {
    case ACTION_MELEE_SPELL_ATTACK:
    case ACTION_MELEE_WEAPON_ATTACK:
      return formatMelee(range)

    case ACTION_RANGE_WEAPON_ATTACK:
      return formatRange(range)

    case ACTION_RANGE_SPELL_ATTACK:
      return formatRangeSpell(range)

    default:
      return ''
  }
}
