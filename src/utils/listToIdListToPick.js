export default list => list.reduce(
  (arr, {probabilityWeight, id}) => {
    for (let i = 0; i <= probabilityWeight; i++) {
      arr.push(id)
    }

    return arr
  },
  []
)
