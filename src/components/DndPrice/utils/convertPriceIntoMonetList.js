import {goldType, silverType, copperType} from '@/components/DndMonet'

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
            type: goldType,
            monet: gold,
        },
        {
            type: silverType,
            monet: silver,
        },
        {
            type: copperType,
            monet: copper,
        },
    ]
}

export default convertPriceIntoMonetList
