const COEF_ITEM_PER_COLUMN = 5
const MAX_COLUMN = 4
const DESCRIPTION_COEF = 1/400
const NO_DESCRIPTION_WEIGNT = 0
const ITEM_WEIGNT = 1

export default (
  {
    actionList = [],
    featureList = [],
    legendaryActionList = [],
    legendaryPoints = 0,
  }
) => {
  const total = [
    actionList,
    featureList,
    legendaryActionList,
  ].reduce(
    (listSum, listItem) => listSum + listItem.reduce(
      (sum, item) => ITEM_WEIGNT + sum + (
        item.description
          ? item.description.length * DESCRIPTION_COEF
          : NO_DESCRIPTION_WEIGNT
      ),
      0
    ),
    0
  )

  for (let i = MAX_COLUMN; i > 1; i--) {
    if (total > (i - 1) * COEF_ITEM_PER_COLUMN) {
      return i
    }
  }

  if (legendaryPoints) {
    return 3
  }
}
