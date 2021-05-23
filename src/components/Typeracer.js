import React from 'react'; 
import Button from './Button'; 

/* ----------------------------------- 📓 ----------------------------------- */
//* the state for values in the component come from App! 
//! the ANIMATION property of the time display is a slice of state passed from App
// It is null on initialization, but when the timer reaches 10 seconds or less it begins 
// This is accomplished by updating the animation state dynamically. 
// In the STYLE property of the `time` div we use a ternary to assign the animation to the one defined in App.css, otherwise it's an empty string (no animation) 

const Typeracer = (props) => {
    const { newWord, 
        inputValue, 
        setInputValue, 
        disabled, 
        time, 
        animation } = props; 

    return (
        <div className="typeRacer">
            <div className="wordOutput">
                <p>{newWord}</p>
            </div>
            <div 
            style={{ animation: animation !== null ? animation : "" }}
            className="time"
            >
                <p>{time}</p>
            </div>
            <div className="wordValues">
                <input 
                type="text"
                disabled={disabled && disabled}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={disabled ? "" : "Start typing..."} 
                />
                <Button />
            </div>
        </div>
    );
};

export default Typeracer; 