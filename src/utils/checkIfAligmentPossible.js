import {dndAligmentCollection} from "@/constants/dnd/dndAligmentList"

const checkIfAligmentPossible = (checkAligmentId, goalAligmentId) => {
  if (checkAligmentId === goalAligmentId) {
    return true
  }

  const aligment = dndAligmentCollection[goalAligmentId]

  if (aligment) {
    const {children} = aligment

    if (children && Array.isArray(children)) {
      if (children.includes(checkAligmentId)) {
        return true
      }

      return children.some(id => checkIfAligmentPossible(checkAligmentId, id))
    }
  }

  return false
}

export default checkIfAligmentPossible
