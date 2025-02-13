import './App.css';
import react from 'react';
import { useState } from 'react';
import flashcardsData from './components/flashcardsData.js';
import {cardClicked, nextCard, prevCard, shuffleCard, guessAnswer} from './components/cardFunctions.js';

const App = () => {
  const [state, setstate] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [flashcards, setFlashcards] = useState(flashcardsData);
  const [guess, setGuess] = useState('');
  const [streak, setStreak] = useState(0);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const isCorrect = guessAnswer(flashcards, state, guess);
    if (isCorrect) {
      setStreak(streak + 1);
    } else {
      setStreak(0);
    };
    setGuess('');
  };

  return (
    <div className="App">
      <h1>Boating 101 Flashcard's</h1>
      <div className='info-container'>
        <p>Total Cards: {flashcards.length - 1}</p>
        <p>Correct Streak: {streak}</p>
      </div>
      <div className="flashcard-container">
        <div className={`flashcard ${isFlipped ? 'flipped' : ''} ${flashcards[state].difficulty}`} onClick={() => cardClicked(isFlipped, setIsFlipped)}>
          <div className="flashcard-front">
            <p>{flashcards[state].question}</p>
            <img src={flashcards[state].Image} alt="Boat" />
          </div>
          <div className="flashcard-back">
            <p>{flashcards[state].answer}</p>
          </div>
        </div>
      </div>

      <form className="guess-container" onSubmit={handleGuessSubmit}>
        <input type="text" value={guess} onChange={handleGuessChange} placeholder="Enter your guess" />
        <button onClick={handleGuessSubmit}>Submit</button>
      </form>

      <div className="nav-buttons">
        <button onClick={() => prevCard(setIsFlipped, setstate, flashcards)}>Back</button>
        <button onClick={() => nextCard(setIsFlipped, setstate, flashcards)}>Next</button>
        <button onClick={() => shuffleCard(setIsFlipped, setstate, flashcards, setFlashcards)}>Shuffle</button>
      </div>
    </div>
  );
};

export default App;