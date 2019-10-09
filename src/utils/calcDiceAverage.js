export default (
  {
    cubeType = 0,
    cubeCount = 0,
    cubeBonus = 0,
    useMax = false,
  },
) => useMax
  ? cubeType * cubeCount + cubeBonus
  : Math.max(
    cubeCount + cubeBonus + Math.floor((cubeType * cubeCount - cubeCount) / 2),
    0,
  )
