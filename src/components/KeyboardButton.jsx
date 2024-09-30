import React from 'react'
import { useState } from 'react';

const KeyboardButton = (props) => {

  const [className, setClassName] = useState("keyboardButton")
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  function updateGame(value) {

      // Update word status
    props.setWord(word => word.map(letterEl => {
      if (letterEl.letter === value) {
        setIsButtonDisabled(true)
        return { ...letterEl, visible: true }
      } else {
        setIsButtonDisabled(true)
        return { ...letterEl }
      }
    }))

    // Update Guesses
    const wordAsArray = props.word.map(letter => letter.letter)
    const word = wordAsArray.join('')

    if(props.remainingGuesses<1) {
      setIsButtonDisabled(true)
      // disableEverything
      return
    } else if(props.remainingGuesses>=0 && word.includes(value)) {
      setClassName("keyboardButton correct")
    } else {
        setClassName("keyboardButton incorrect")
        props.setRemainingGuesses(current => current - 1)
    }
  }

return (
  <div>
    <button className={className} disabled={isButtonDisabled} onClick={() => updateGame(props.value)}>{props.value}</button>
  </div>
)
}

export default KeyboardButton