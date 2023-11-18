import React from 'react'
import { Link } from 'gatsby'

import generateDwMovePath from '@/utils/generateDwMovePath'

import './DwMoveLinkStyles.less'

const DwMoveLinkComponent = ({id, name, classId, children = ''}) => (
  <Link
    className='DwMoveLink'
    to={generateDwMovePath(id, classId)}
  >{children || name}</Link>
)

export default DwMoveLinkComponent
