import React from 'react'

const GameMessage = (props) => {

  function createGameMessage() {
    const filteredWord = props.word.filter(letter => letter.visible===false)
    if(filteredWord.length===0) {
      return <p>Congratulations! You have won the game. Refresh to play again.</p>
    } else if (props.remainingGuesses >= 1) {
      return <p>You have {props.remainingGuesses} guesses</p>
    } else {
      return <p>You have no guesses left. Refresh to try again</p>
    }
  }

  return (
    <div className="game-message">{createGameMessage()}</div>
  )
}

export default GameMessage