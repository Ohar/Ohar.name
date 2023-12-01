import React from 'react'

import DwMoveLink from '@/components/DwMoveLink'
import sortByName from '@/utils/sortByName'
import generateDwPcClassPathById from '@/utils/generateDwPcClassPathById'
import { Link } from 'gatsby'

export default [
  {
    id: 'monk..',
    name: '',
    text: (
      <>
        TODO
      </>
    ),
  },
]
  .map(
    move => ({
      ...move,
      classId: 'monk',
    }),
  )
  .sort(sortByName)

const foo = `


`