import React from 'react'
import KeyboardButton from './KeyboardButton'

const Keyboard = (props) => {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    
    const keyboardButtons = alphabet.map(letter => (
        <KeyboardButton key={letter} value={letter} remainingGuesses={props.remainingGuesses} setRemainingGuesses={props.setRemainingGuesses}
                setGameMessage={props.setGameMessage} word={props.word} setWord={props.setWord}
        />
    ))

  return (
    <div className="keyboard">
        {keyboardButtons}
    </div>
  )
}

export default Keyboard