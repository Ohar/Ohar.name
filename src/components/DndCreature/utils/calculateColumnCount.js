const COEF_ITEM_PER_COLUMN = 4
const MAX_COLUMN = 4

export default (
  {
    actionList,
    featureList,
    legendaryPoints,
    legendaryActionList,
  }) => {
  const featureCount = featureList && featureList.length || 0
  const actionCount = actionList && actionList.length || 0
  const legendaryActionCount = legendaryActionList && legendaryActionList.length || 0

  const total = featureCount + actionCount + legendaryActionCount

  for (let i = MAX_COLUMN; i > 1; i--) {
    if (total > (i - 1) * COEF_ITEM_PER_COLUMN) {
      return i
    }
  }

  if (legendaryPoints) {
    return 2
  }
}
