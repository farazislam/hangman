import React from 'react'

const HangmanStatus = (props) => {
  return (
    <div className="hangman-container">
      <div className="crane">
        <div className={props.remainingGuesses<11 ? "crane-one" : "invisible"}></div>
        <div className={props.remainingGuesses<10 ? "crane-two" : "invisible"}></div>
        <div className={props.remainingGuesses<9 ? "crane-three" : "invisible"}></div>
        <div className={props.remainingGuesses<8 ? "crane-four" : "invisible"}></div>
      </div>
      <div className={props.remainingGuesses<1 ? "hangman hangman-animation" : "hangman"}>
        <div className={props.remainingGuesses<7 ? "noose" : "invisible"}></div>
        <div className={props.remainingGuesses<6 ? "head" : "invisible"}></div>
        <div className={props.remainingGuesses<5 ? "leftarm" : "invisible"}></div>
        <div className={props.remainingGuesses<4 ? "rightarm" : "invisible"}></div>
        <div className={props.remainingGuesses<3 ? "torso" : "invisible"}></div>
        <div className={props.remainingGuesses<2 ? "leftleg" : "invisible"}></div>
        <div className={props.remainingGuesses<1 ? "rightleg" : "invisible"}></div>
      </div>
    </div>
  )
}

export default HangmanStatus