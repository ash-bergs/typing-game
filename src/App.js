import React, { useState, useEffect }  from 'react';
import Words from "./components/Words"; 
import Container from "./components/Container"; 
import Results from "./components/Results"; 
import Typeracer from "./components/Typeracer"; 
import "./App.css"
/* -------------------------------------------------------------------------- */
/*                            Notes on this project                           */
/*
  * In this tutorial `state` lives in App, e.g. the topmost layer. This is an example of `lifting state`
*/
/* -------------------------------------------------------------------------- */

function App() {
  //! STATE !\\
  // words is set to the object exported from the Words.js file
  //? I think a more appropriate name for this state would be words (plural) ? 
  const [word, setWord] = useState(Words); 
  // initial state is the first word in Words object
  const [newWord, setNewWord] = useState(word[0])
  // disabled toggles gameplay - starts the timer 
  const [disabled, setDisabled] = useState(true); 
  //? these states have inconsistent names I might want to revisit later (for now I'll continue with the tutorial to avoid confusion)
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]); 
  const [countCorrect, setCountCorrect] = useState(0); 
  const [time, setTime] = useState(30); 
  // inputValue is the answer the user submits, what has been typed into the form component to come later 
  const [inputValue, setInputValue] = useState(""); 
  const [animation, setAnimation] = useState(null); 

  let randomWord = Math.floor(Math.random() * word.length); 

  //* check answer function 
  const checkAnswer = () => {
    if (inputValue.trim() === newWord) {
      setCorrectResults(prevCorrect => [...prevCorrect, newWord]); 
      setCountCorrect(prevCorrect => prevCorrect + 1); 
      return;
    }
    setWrongResults(prevWrong => [...prevWrong, inputValue]); 
  };

  //* handle input
  const handleInput = e => {
    // charCode 13 = enter key 
    if (e.charCode === 13 && inputValue.trim() !== ""){
      checkAnswer();
      setNewWord(word[randomWord]); 
      // reset input field 
      setInputValue(""); 
    }
  };

  //* start the game! 
  const handleStart = () => {
    // toggle disabled status 
    setDisabled(!disabled);
    setCorrectResults([]); 
    setWrongResults([]); 
    setCountCorrect([]); 
    setInputValue(""); 
  }

  return (
    <div className="App">
      <Container>
        <Typeracer 
        newWord={newWord}
        inputValue={inputValue}
        setInputValue={setInputValue}
        disabled={disabled}
        time={time}
        animation={animation}
        handleInput={handleInput}
        handleStart={handleStart}
        />
      </Container>
      <Results 
      correctResults={correctResults}
      wrongResults={wrongResults}
      countCorrect={countCorrect}
      />
    </div>
  );
}

export default App;
