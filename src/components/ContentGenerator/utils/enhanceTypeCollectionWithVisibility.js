const enhanceTypeCollectionWithVisibility = typeCollection => Object
  .keys(typeCollection)
  .reduce(
    (result, type) => {
      const {show} = typeCollection[type]
      const isTypeVisible = !(
        show
        && Object.keys(show).find(
          key => typeCollection[key].chosen !== show[key]
        )
      )

      const list = typeCollection[type].list.map(
        ({show: showItem, ...rest}) => {
          const visible = !(
            showItem && Object.keys(showItem).find(
              key => typeCollection[key].chosen !== showItem[key]
            )
          )

          return {
            ...rest,
            show: showItem,
            visible,
          }
        }
      )

      return {
        ...result,
        [type]: {
          ...typeCollection[type],
          visible: isTypeVisible,
          list,
        },
      }
    },
    {}
  )

export default enhanceTypeCollectionWithVisibility
