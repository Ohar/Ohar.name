const isVisible = (show, hide, collection) => (
  !(
    show
    && Object.keys(show).find(
      key => collection[key].chosen !== show[key]
    )
  ) && !(
    hide
    && Object.keys(hide).find(
      key => collection[key].chosen === hide[key]
    )
  )
)

const enhanceTypeCollectionWithVisibility = typeCollection => Object
    .keys(typeCollection)
    .reduce(
        (result, type) => {
            const {show, hide, list, chosen} = typeCollection[type]
            const [{value: chosenDefault}] = list
            const isTypeVisible = isVisible(show, hide, typeCollection)

            let updatedChosen = isTypeVisible
                ? chosen
                : chosenDefault

            const updatedList = list.map(
                ({show: showItem, hide: hideItem, value, ...rest}) => {
                    const visible = isVisible(showItem, hideItem, typeCollection)

                    if (isTypeVisible && !visible && chosen === value) {
                        updatedChosen = chosenDefault
                    }

                    return {
                        ...rest,
                        show: showItem,
                        hide: hideItem,
                        value,
                        visible,
                    }
                }
            )

            return {
                ...result,
                [type]: {
                    ...typeCollection[type],
                    chosen: updatedChosen,
                    list: updatedList,
                    visible: isTypeVisible,
                },
            }
        },
        {}
    )

export default enhanceTypeCollectionWithVisibility
