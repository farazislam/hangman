import React from 'react'
import { useState } from 'react'

const Word = (props) => {

  const letterElements = props.word.map(letterElement => (
    <li><span className={letterElement.visible === false ? "hidden" : ""}>{letterElement.letter}</span></li>
  ))

  return (
    <ul className="word">
      {letterElements}
    </ul>
  )
}

export default Word