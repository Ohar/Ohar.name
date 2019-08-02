import React from "react"
import ReactMarkdown from "react-markdown"

import "./DndSentientItemStyles.css"

const DndSentientItemComponent = ({itemDataList}) => (
  <table className='DndSentientItem'>
    <tbody>
    {
      itemDataList.map(
        ({title, headerTitle, header, content, i}) => (
          <tr
            className='DndSentientItem_row'
            key={i}
          >
            <th
              className='DndSentientItem_cell DndSentientItem_cell-head'
              title={headerTitle || null}
            >
              {header}
            </th>
            <td
              className='DndSentientItem_cell'
              title={title || null}
            >
              <ReactMarkdown>{content}</ReactMarkdown>
            </td>
          </tr>
        )
      )
    }
    </tbody>
  </table>
)

export default DndSentientItemComponent
