export default list => list.reduce(
  (summ, {probabilityWeight}) => summ + probabilityWeight,
  0
)
