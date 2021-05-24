import React from 'react'; 

const Results = (props) => {
    const { correctResults, 
        wrongResults, 
        countCorrect,
        totalWords } = props; 

        //TODO - there appears to be a bug.... i was recently playing with the app and the total number wasn't correct. I had typed every one of 17 words correctly.. but the score was 17/36 
        //? investigate why this is happening 

    return (
        <div className="results">
            <div className="title">
                <p>
                    Correct Answers: {countCorrect.length} / {totalWords.length}
                </p>
            </div>
            <div className="resultsContainer">
                <div className="correctResults">
                    {correctResults.map((correctWord, index) => (
                            <div key={index} className="row">
                                <p>{correctWord}</p>
                            </div>
                    ))}
                </div>
                <div className="wrongResults">
                    {wrongResults.map((wrongWord, index) => (
                            <div key={index} className="row">
                                <p>{wrongWord}</p>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
}; 

export default Results; 