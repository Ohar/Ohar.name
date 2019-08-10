import {
  ACTION_MELEE_WEAPON_ATTACK,
  ACTION_MELEE_OR_RANGE_WEAPON_ATTACK,
  ACTION_RANGE_WEAPON_ATTACK,
} from '@/constants/dnd/dndActionTypeList'

const formatMelee = range => `досягаемость ${range} фт.`
const formatRange = ({normal, max}) => `дистанция ${normal} фт./${max} фт.`

export default ({type, range}) => {
  switch (type) {
    case ACTION_MELEE_WEAPON_ATTACK:
      return formatMelee(range)

    case ACTION_MELEE_OR_RANGE_WEAPON_ATTACK: {
      const meleeText = formatMelee(range.melee)
      const rangeText = formatRange(range.range)

      return `${meleeText} или ${rangeText}`
    }

    case ACTION_RANGE_WEAPON_ATTACK:
      return formatRange(range)

    default:
      return ''
  }
}
