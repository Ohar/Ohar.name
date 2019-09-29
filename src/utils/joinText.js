export default list => {
  const len = list.length

  return len > 1
    ? [
      list.slice(0, len - 1).join(', '),
      list.slice(len - 1),
    ]
      .join(' или ')
    : list[0]
}
