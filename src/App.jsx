import './App.css';
import { useState } from 'react';

const flashcards = [
  { question: 'What is the name of the front of a boat?', answer: 'Bow', Image: ''},
  { question: 'What is the name of the back of the boat?', answer: 'Stern', Image: ''},
  { question: 'What is the name of the left side of a boat?', answer: 'Port', Image: ''},
  { question: 'What is the name of the right side of a boat?', answer: 'Starboard', Image: ''},
  { question: 'What is the name of the location where the steering wheel of a boat is?', answer: 'Helm', Image: ''},
  { question: 'What is the name of where you tie a boat to?', answer: 'Cleat', Image: ''},
  { question: 'What is the name of an item used to keep the boat from rubbing on the dock?', answer: 'Fender', Image: ''},
  { question: 'What is the name of the item used to keep the boat stationary while on the water?', answer: 'Anchor', Image: ''},
  { question: 'What is the name of the wave a boat produces?', answer: 'Wake', Image: ''},
  { question: 'What is the width of a boat called?', answer: 'Beam', Image: ''},
]

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