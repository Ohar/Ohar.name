import goodList from "./../constants/goodList"
import ANY_TYPE from "../constants/ANY_TYPE"

import getRandomShopType from "./getRandomShopType"

const goodsGenerator = (shopType) => goodList.reduce(
  (shopGoods, { supply, ...otherGoodParams }) => {
    const inShop = shopType === ANY_TYPE
      ? supply[getRandomShopType()]
      : supply[shopType]

    if (inShop) {
      const { probability } = inShop

      const isPresent = Math.random() >= 1 - probability

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

        return [
          ...shopGoods,
          { quantity, ...otherGoodParams },
        ]
      } else {
        return shopGoods
      }
    } else {
      return shopGoods
    }
  },
  [],
)

export default goodsGenerator
