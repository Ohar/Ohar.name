export default list => list.reduce(
  (collection, item) => ({
    ...collection,
    [item.id]: item,
  }),
  {}
)
