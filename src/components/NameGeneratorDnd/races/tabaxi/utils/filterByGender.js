const filterByGender = (list, gender, genderToUse) => list.filter(
  item => item[gender] && item[genderToUse]
)

export default filterByGender
