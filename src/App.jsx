import './App.css';
import react from 'react';
import { useState } from 'react';
import flashcards from './components/flashcardsData.jsx';

const App = () => {
  const [state, setstate] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const cardClicked = () => {
    setIsFlipped(!isFlipped)
  }

  const nextCard = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setstate((prevState) => (prevState + 1) % flashcards.length)
    }, 300);
  }

  const prevCard = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setstate((prevState) => (prevState - 1 + flashcards.length) % flashcards.length)
    }, 300); 
  }

  return (
    <div className="App">
      <h1>Boating 101 Flashcard's</h1>
      <p>Total Cards: {flashcards.length}</p>
      <div className="flashcard-container">
      <div className={`flashcard ${isFlipped ? 'flipped' : ''} ${flashcards[state].difficulty}`} onClick={cardClicked}>
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
        <button onClick={prevCard}>Back</button>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  )
}

export default App