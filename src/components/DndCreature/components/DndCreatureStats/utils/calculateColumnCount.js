import arrify from 'arrify'

const COEF_ITEM_PER_COLUMN = 10
const MAX_COLUMN = 4
const DESCRIPTION_COEF = 1/200
const NO_DESCRIPTION_WEIGNT = .25
const LEGENDARY_WEIGNT = 2
const SPELLCAST_WEIGNT = 3
const BASIC_WEIGNT = 6
const ITEM_WEIGNT = .75

export default (
  {
    actionList = [],
    featureList = [],
    legendaryActionList = [],
    legendaryPoints = 0,
    spellCast = null,
    spellCastTogether = null,
  }
) => {
  let total = [
    actionList,
    featureList,
    legendaryActionList,
  ].reduce(
    (listSum, listItem) => listItem
      ? listSum + listItem.reduce(
        (sum, item) => ITEM_WEIGNT + sum + (
          item.description
            ? item.description.length * DESCRIPTION_COEF
            : NO_DESCRIPTION_WEIGNT
        ),
        0
      )
      : 0,
    BASIC_WEIGNT
  )

  if (legendaryActionList.length) {
    total += LEGENDARY_WEIGNT
  }

  if (spellCast) {
    arrify(spellCast).forEach(
      () => {
        total += SPELLCAST_WEIGNT
      }
    )
  }

  if (spellCastTogether) {
    total += SPELLCAST_WEIGNT
  }

  for (let i = MAX_COLUMN; i > 1; i--) {
    if (total > (i - 1) * COEF_ITEM_PER_COLUMN) {
      return i
    }
  }

  if (legendaryPoints) {
    return 3
  }
}
