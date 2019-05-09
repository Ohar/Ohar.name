const enhanceTypeCollectionWithVisibility = typeCollection => Object
    .keys(typeCollection)
    .reduce(
        (result, type) => {
            const {show, list, chosen} = typeCollection[type]
            const isTypeVisible = !(
                show
                && Object.keys(show).find(
                    key => typeCollection[key].chosen !== show[key]
                )
            )

            const [{value: chosenDefault}] = list

            let updatedChosen = isTypeVisible
                ? chosen
                : chosenDefault

            const updatedList = list.map(
                ({show: showItem, value, ...rest}) => {
                    const visible = !(
                        showItem && Object.keys(showItem).find(
                            key => typeCollection[key].chosen !== showItem[key]
                        )
                    )

                    if (isTypeVisible && !visible && chosen === value) {
                        updatedChosen = chosenDefault
                    }

                    return {
                        ...rest,
                        show: showItem,
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
