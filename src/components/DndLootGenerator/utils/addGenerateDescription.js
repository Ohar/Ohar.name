import React from 'react'

import MonetList from './../components/MonetList'

export default ({list, ...rest}) => ({
  ...rest,
  generateDescription: () => <MonetList list={list}/>,
})
