import goodList from "./../constants/goodList"
import {cityTypeCollection} from "./../constants/cityTypeList"

const goodsGenerator = (shopType, cityType) => goodList.reduce(
  (shopGoods, { supply, ...otherGoodParams }) => {
    const inShop = supply[shopType]

    if (inShop) {
      const { probability } = inShop
      const { supplyKoef } = cityTypeCollection[cityType]
      const isPresent = Math.random() >= 1 - probability * supplyKoef

      if (isPresent) {
        const { min, max } = inShop
        const quantity = Math.round(
          Math.max(
            Math.min(
              min + Math.random() * (max - min),
              max,
            ),
            min,
          ),
        )

        if (quantity) {
          return [
            ...shopGoods,
            { quantity, ...otherGoodParams },
          ]
        }
      }
    }

    return shopGoods
  },
  [],
)

export default goodsGenerator
