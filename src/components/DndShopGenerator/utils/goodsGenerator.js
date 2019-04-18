import goodList from './../constants/goodList'
import ANY_TYPE from "../constants/ANY_TYPE"

import getRandomShopType from './getRandomShopType'

export default function goodsGenerator(shopType) {
  console.log('goodsGenerator', shopType);
  return goodList.reduce(
    (shopGoods, good) => {
      const supply = shopType === ANY_TYPE
        ? good.supply[getRandomShopType()]
        : good.supply[shopType]

      console.log('supply', supply);

      if (supply) {
        const {probability} = supply

        const isPresent = Math.random() >= 1 - probability

        if (isPresent) {
          const {min, max} = supply
          const {name, description, cost} = good

          const quantity = Math.round(
            Math.max(
              Math.min(
                min + Math.random() * (max - min),
                max
              ),
              min
            )
          )

          return [
            ...shopGoods,
            {name, description, cost, quantity}
          ]
        } else {
          return shopGoods
        }
      } else {
        return shopGoods
      }
    },
    []
  )
}
