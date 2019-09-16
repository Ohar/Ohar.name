import {MONET_GOLD, MONET_SILVER, MONET_COPPER} from '@/constants/dnd/dndMonetTypeList'

const GOLD_KOEF = 100
const SILVER_KOEF = 10

const convertPriceIntoMonetList = price => {
    const gold = price >= GOLD_KOEF
        ? Math.floor(price / GOLD_KOEF)
        : 0

    const priceNoGold = price - gold * GOLD_KOEF

    const silver = priceNoGold >= SILVER_KOEF
        ? Math.floor(priceNoGold / SILVER_KOEF)
        : 0

    const copper = priceNoGold - silver * SILVER_KOEF

    return [
        {
            type: MONET_GOLD,
            monet: gold,
        },
        {
            type: MONET_SILVER,
            monet: silver,
        },
        {
            type: MONET_COPPER,
            monet: copper,
        },
    ]
}

export default convertPriceIntoMonetList
