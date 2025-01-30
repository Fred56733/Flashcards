import './App.css';
import { useState } from 'react';

const flashcards = [
  { question: 'What is the name of the front of a boat?', answer: 'Bow' },
  { question: 'What is the name of the back of the boat?', answer: 'Stern' },
  { question: 'What is the name of the left side of a boat?', answer: 'Port' },
  { question: 'What is the name of the right side of a boat?', answer: 'Starboard' },
  { question: 'What is the name of the location where the steering wheel of a boat is?', answer: 'Helm' },
  { question: 'What is the name of where you tie a boat to?', answer: 'Cleat' },
  { question: 'What is the name of an item used to keep the boat from rubbing on the dock?', answer: 'Fender' },
  { question: 'What is the name of the item used to keep the boat stationary while on the water?', answer: 'Anchor' },
  { question: 'What lights must you have on while a boat is underway from sunset to sunrise?', answer: 'Navlights' },
  { question: '10. What is the width of a boat called?', answer: 'Beam' },
]

const App = () => {
  const [state, setstate] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const cardClicked = () => {
    setIsFlipped(!isFlipped)
  }

  const nextCard = () => {
    setstate((prevState) => (prevState + 1) % flashcards.length)
    setIsFlipped(false)
  }

  const prevCard = () => {
    setstate((prevState) => (prevState - 1 + flashcards.length) % flashcards.length)
    setIsFlipped(false)
  }

  return (
    <div className="App">
      <h1>Flashcard App</h1>
      <p>Total Cards: {flashcards.length}</p>
      
      <div className="flashcard-container">
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick = {cardClicked}>
          <div className="flashcard-front">
            <p>{flashcards[state].question}</p>
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