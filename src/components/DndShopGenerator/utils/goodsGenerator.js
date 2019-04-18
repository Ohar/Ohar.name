import goodList from './../constants/goodList'

export default function goodsGenerator(shopType) {
  return goodList.reduce(
    (shopGoods, good) => {
      const supply = good.supply[shopType]

      if (supply) {
        const {probability} = supply

        const isPresent = Math.random() >= probability

        if (isPresent) {
          const {min, max} = supply
          const {name, description, cost} = good

          const quantity = Math.min(
            Math.max(
              min + Math.random() * (max - min),
              max
            ),
            min
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
