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
      return  arrify(filters).includes(data)
        ? data
        : null
    }

    if (isDataArray) {
      const defaultArr = []

      const result2 = data.reduce(
        (resultArr, item) => {
          const result = filterData({data: item, filters})

          return result
            ? [
              ...resultArr,
              result,
            ]
            : resultArr
        },
        defaultArr
      )

      return result2 === defaultArr
        ? null
        : result2
    }

    if (isDataObject && isFiltersPrimitive) {
      return null
    }

    if (isDataObject && isFiltersObject) {
      const defaultObj = {}

      const result2 = Object
        .keys(filters)
        .reduce(
          (resultObj, propName) => {
            const result = filterData({data: data[propName], filters: filters[propName]})

            return result
              ? {
                ...resultObj,
                [propName]: result,
              }
              : resultObj
          },
          defaultObj
        )

      return result2 === defaultObj
        ? null
        : {
          ...data,
          ...result2,
        }
    }

    if (isDataObject && isFiltersArray) {
      const defaultObj = {}

      const result2 = filters.reduce(
        (resultObj, item) => {
          const result = filterData({data, filters: item})

          return result
            ? {
              ...resultObj,
              ...result,
            }
            : resultObj
        },
        defaultObj
      )

      return result2 === defaultObj
        ? null
        : {
          ...data,
          ...result2,
        }
    }
  }

  if (isDataArray || isDataObject) {
    return data
  }

  return null
}

module.exports = filterData
