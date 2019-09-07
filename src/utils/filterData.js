const arrify = require('arrify')

function filterData ({data, filters}) {
  const isDataArray = Array.isArray(data)
  const isFiltersArray = Array.isArray(filters)

  const isDataObject = !isDataArray && typeof data === 'object'
  const isFiltersObject = !isFiltersArray && typeof filters === 'object'

  const isDataPrimitive = !isDataArray && !isDataObject
  const isFiltersPrimitive = !isFiltersArray && !isFiltersObject

  if (data && filters) {
    if (isDataPrimitive) {
      return arrify(filters).includes(data)
        ? data
        : null
    }

    if (isDataArray) {
      const defaultArr = []

      const result = data.reduce(
        (resultArr, item) => {
          const filtered = filterData({data: item, filters})

          return filtered
            ? [
              ...resultArr,
              filtered,
            ]
            : resultArr
        },
        defaultArr
      )

      return result.length
        ? result
        : null
    }

    if (isDataObject && isFiltersPrimitive) {
      return null
    }

    if (isDataObject && isFiltersObject) {
      const defaultObj = {}

      let isOkay = true

      const result = Object
        .keys(filters)
        .reduce(
          (resultObj, propName) => {
            if (isOkay) {
              const filtered = filterData(
                {
                  data: data[propName],
                  filters: filters[propName],
                }
              )

              if (filtered) {
                return {
                  ...resultObj,
                  [propName]: filtered,
                }
              }

              isOkay = false
            }

            return defaultObj
          },
          defaultObj
        )

      return isOkay
        ? {
          ...data,
          ...result,
        }
        : null
    }

    if (isDataObject && isFiltersArray) {
      const defaultObj = {}

      const result = filters.reduce(
        (resultObj, item) => {
          const filtered = filterData({data, filters: item})

          return filtered
            ? {
              ...resultObj,
              ...filtered,
            }
            : resultObj
        },
        defaultObj
      )

      return result === defaultObj
        ? null
        : {
          ...data,
          ...result,
        }
    }
  }

  if (isDataArray || isDataObject) {
    return data
  }

  return null
}

module.exports = filterData
