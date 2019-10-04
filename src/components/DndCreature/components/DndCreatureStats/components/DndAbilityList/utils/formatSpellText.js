import { dndSpellCollection } from '@/constants/dnd/dndSpellList'

const formatSpellStr = ({ name, nameEn, postText = '' }) => `_${name}_ (${nameEn}${postText})`

export default item => {
  if (typeof item === 'string') {
    return formatSpellStr(dndSpellCollection[item])
  }

  if (typeof item === 'object') {
    let commentText = ''
    let alreadyCastedText = ''

    if (item.comment) {
      commentText = ` ${item.comment}`
    }
    console.log('alreadyCasted', item.alreadyCasted, item);

    if (item.alreadyCasted) {
      alreadyCastedText = ` уже наложено перед сражением`
    }

    const postTextArr = [
      commentText,
      alreadyCastedText,
    ]
      .filter(e => e)

    const postText = postTextArr.length
      ? postTextArr
        .join(';')
        .replace(/^/, '; ')
      : ''

    const {name, nameEn} = dndSpellCollection[item.id]

    return formatSpellStr({name, nameEn, postText})
  }
}
