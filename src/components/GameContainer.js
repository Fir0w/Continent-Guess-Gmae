import React, { useState, useEffect } from 'react';
import styles from './GameContainer.module.css';
import { selectContinent } from './utils/utils.js';

const GameContainer = () => {
    const [selectedContinent, setSelectedContinent] = useState("");
    const [randomAnswer, setRandomAnswer] = useState("");
    
    useEffect(() => {
        generateContinent();
        generateRandomAnswer();
    }, []);

    const generateContinent = () => {
        const continentString = selectContinent();
        if (continentString.name !== selectedContinent.name)
            setSelectedContinent(continentString);
    };

    const generateRandomAnswer = () => {
        const continentString = selectContinent();
        if (continentString.name !== randomAnswer.name)
            setRandomAnswer(continentString);
    };

    const checkAnswer = (answer) => {

        const answerTrue = selectedContinent.correctAnswer;
	
        if (answerTrue === answer) {
            console.log(answerTrue, answer);
            generateRandomAnswer();
            generateContinent();
        } else if (answerTrue === answer) {
            console.log(answerTrue, answer);
            generateRandomAnswer();
            generateContinent();
        };
    };

    return (
        <div className={styles.gameContainer}>
            <h1>Guess Game</h1>
            <div className={styles.img}>
                <img src={selectedContinent.img} width="300" height="300" alt=""></img>
            </div>
            <h3>Guess the continent</h3>
            <div className={styles.Guess}>
                <button onClick={() => checkAnswer(selectedContinent.name)}>{selectedContinent.name}</button>
                <button onClick={() => checkAnswer(randomAnswer.name)}>{randomAnswer.name}</button>
            </div>
        </div>
    );
};

export default GameContainer;
