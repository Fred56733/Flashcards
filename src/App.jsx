import './App.css';
import react from 'react';
import { useState } from 'react';
import flashcardsData from './components/flashcardsData.js';
import {cardClicked, nextCard, prevCard, shuffleCard} from './components/cardFunctions.js';

const App = () => {
  const [state, setstate] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [flashcards, setFlashcards] = useState(flashcardsData);

  return (
    <div className="App">
      <h1>Boating 101 Flashcard's</h1>
      <p>Total Cards: {flashcards.length}</p>
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

      <div className="nav-buttons">
        <button onClick={() => prevCard(setIsFlipped, setstate, flashcards)}>Back</button>
        <button onClick={() => nextCard(setIsFlipped, setstate, flashcards)}>Next</button>
        <button onClick={() => shuffleCard(setIsFlipped, setstate, flashcards, setFlashcards)}>Shuffle</button>
      </div>
    </div>
  );
};

export default App