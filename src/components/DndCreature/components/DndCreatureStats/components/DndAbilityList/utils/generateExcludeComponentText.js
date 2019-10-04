import { CAST_NONE, dndCastComponentCollection } from '@/constants/dnd/dndCastComponentList'

export default ({ componentExclude, componentInstead, spellCasterClass }) => {
  if (componentExclude) {
    if (spellCasterClass) {
      const componentText = componentExclude === CAST_NONE
        ? 'не нужны никакие'
        : `не нужны ${dndCastComponentCollection[componentExclude].name.plural.genitive}`

      return `, которому для накладывания заклинаний ${componentText} компоненты`
    } else {
      const componentText = componentExclude === CAST_NONE
        ? 'ни в каких'
        : `в ${dndCastComponentCollection[componentExclude].name.plural.genitive}`

      return `, не нуждаясь ${componentText} компонентах`
    }
  }

  if (componentInstead) {
    return `, используя вместо всех компонентов ${componentInstead}`
  }

  return ''
}
