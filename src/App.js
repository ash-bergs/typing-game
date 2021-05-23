import React, { useState, useEffect }  from 'react';
import Words from "./components/Words"; 
import Container from "./components/Container"; 
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
  // currentResults is an array that holds the words the user has encountered, wrong or right 
  //? these states have inconsistent names I might want to revisit later (for now I'll continue with the tutorial to avoid confusion)
  // const [currentResults, setCurrentResults] = useState([]);
  // const [wrongResults, setWrongResults] = useState([]); 
  // const [countCorrect, setCountCorrect] = useState(0); 
  const [time, setTime] = useState(30); 
  // inputValue is the answer the user submits, what has been typed into the form component to come later 
  const [inputValue, setInputValue] = useState(""); 
  const [animation, setAnimation] = useState(null); 

  // let randomWord = Math.floor(Math.random() * word.length); 


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
        />
      </Container>
    </div>
  );
}

export default App;
