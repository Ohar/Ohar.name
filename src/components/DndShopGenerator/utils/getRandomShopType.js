import shopTypeList from "../constants/shopTypeList"

const getRandomShopType = () => {
  const realShopTypeList = shopTypeList.slice(1) // Exclude 'any'
  const len = realShopTypeList.length

  return realShopTypeList[Math.round((len - 1) * Math.random())].value
}

export default getRandomShopType
