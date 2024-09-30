import './App.css';
import GameMessage from './components/GameMessage';
import HangmanStatus from './components/HangmanStatus';
import Word from './components/Word';
import Keyboard from './components/Keyboard';
import { useState } from 'react';


function App() {

  const [words, setWords] = useState(['banana', 'apple', 'mango', 'kiwi', 'coconut', 'pineapple'])
  const [word, setWord] = useState(createWordArray())
  const [remainingGuesses, setRemainingGuesses] = useState(11);

  function createWordArray() {
    // const randomWord = "broom"
    const randomWord = words[Math.floor(Math.random() * words.length)]
    const newWord = randomWord.split("").map(letter => {
      return {
        letter: letter,
        visible: false
      }
    })
    
    return newWord;
  }

  return (
    <div className="App">
      <GameMessage word={word} remainingGuesses={remainingGuesses}/>
      <HangmanStatus remainingGuesses={remainingGuesses}/>
      <Word word={word}/>
      <Keyboard remainingGuesses={remainingGuesses}
                setRemainingGuesses={setRemainingGuesses}
                word={word}
                setWord={setWord} />
    </div>
  );
}

export default App;
