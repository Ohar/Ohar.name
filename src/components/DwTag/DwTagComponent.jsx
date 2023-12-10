import classNames from 'classnames'
import React, { useState, useEffect, useRef } from 'react'

import { dwTagCollection } from '@/constants/dwTagList'

import './DwTagStyles.less'


function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [ref, callback]);
}

const DwTagContainer = (
  {
    children,
    id,
  },
) => {
  const [isPopupVisible, setPopupVisible] = useState(false)

  const wrapperRef = useRef(null)
  const showPopup = () => setPopupVisible(true)
  const hidePopup = () => setPopupVisible(false)

  useOutsideAlerter(wrapperRef, hidePopup);

  if (!id) {
    return children
  }

  const tag = dwTagCollection[id]

  if (!tag) {
    return children
  }

  const { text, title } = tag

  return (
    <span
      className={classNames('DwTag', {
        'DwTag-showPopup': isPopupVisible,
      })}
      ref={wrapperRef}
      onMouseEnter={showPopup}
      onClick={showPopup}
      onMouseLeave={hidePopup}
    >
      <section className='DwTag_popup'>
        <header className='DwTag_popupHeader'>{title}</header>
        <div className='DwTag_popupBody'>{text}</div>
      </section>
      <span className='DwTag_body'>
        {children}
      </span>
    </span>
  )
}

export default DwTagContainer
