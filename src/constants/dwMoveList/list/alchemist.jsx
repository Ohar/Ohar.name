import React from 'react'

import DwMoveLink from '@/components/DwMoveLink'
import sortByName from '@/utils/sortByName'
import generateDwPcClassPathById from '@/utils/generateDwPcClassPathById'
import { Link } from 'gatsby'

export default [
  {
    id: 'alchemist..',
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
      classId: 'alchemist',
    }),
  )
  .sort(sortByName)

const foo = `


`