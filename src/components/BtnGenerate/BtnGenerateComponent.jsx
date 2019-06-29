import React from "react"

const BtnGenerate = ({onClick, className = ''}) => (
  <button
    className={`BtnGenerate ${className}`}
    onClick={onClick}
  >
    Сгенерировать
  </button>
)

export default BtnGenerate
