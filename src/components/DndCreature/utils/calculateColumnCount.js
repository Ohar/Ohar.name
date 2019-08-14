export default ({actionList, featureList, legendaryPoints, legendaryActionList}) => {
  const featureCount = featureList && featureList.length || 0
  const actionCount = actionList && actionList.length || 0
  const legendaryActionCount = legendaryActionList && legendaryActionList.length || 0

  const total = featureCount + actionCount + legendaryActionCount

  if (total > 12) {
    return 4
  }
  if (total > 8) {
    return 3
  }
  if (total > 4) {
    return 2
  }

  if (legendaryPoints) {
    return 2
  }
}
