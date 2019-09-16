import React from 'react'
import { Link } from 'gatsby'

import Icon from '@/components/Icon'

import './DndSubpageListStyles.less'

const DndSubpageListComponent = ({list}) => (
  <ul className='DndSubpageList'>
    {
      list.map(
        ({title, url, icon}) => (
          <li
            key={url}
            className='DndSubpageList_item'
          >
            <Link
              to={url}
              className='DndSubpageList_link'
            >
              <Icon
                icon={icon}
                className='DndSubpageList_icon'
              />
              <span className='DndSubpageList_text'>{title}</span>
            </Link>
          </li>
        )
      )
    }
  </ul>
)

export default DndSubpageListComponent
