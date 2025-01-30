import './App.css';
import { useState } from 'react';

const flashcards = [
  { question: 'What is the name of the front of a boat?', answer: 'Bow', Image: 'src/assets/Bow.jpg', difficulty: 'easy'},
  { question: 'What is the name of the back of the boat?', answer: 'Stern', Image: 'src/assets/Stern.jpg', difficulty: 'easy'},
  { question: 'What is the name of the left side of a boat?', answer: 'Port', Image: 'src/assets/Port.jpg', difficulty: 'easy'},
  { question: 'What is the name of the right side of a boat?', answer: 'Starboard', Image: 'src/assets/Starboard.jpg', difficulty: 'easy'},
  { question: 'What is the name of where you tie a boat to?', answer: 'Cleat', Image: 'src/assets/Cleat.jpg', difficulty: 'medium'},
  { question: 'What is the name of an item used to keep the boat from rubbing on the dock?', answer: 'Fender', Image: 'src/assets/Fender.jpg', difficulty: 'medium'},
  { question: 'What is the name of the item used to keep the boat stationary while on the water?', answer: 'Anchor', Image: 'src/assets/Anchor.jpg', difficulty: 'medium'},
  { question: 'What is the name of the wave a boat produces?', answer: 'Wake', Image: 'src/assets/Wake.JPG', difficulty: 'medium'},
  { question: 'What is the name of the location where the steering wheel of a boat is?', answer: 'Helm', Image: 'src/assets/Helm.jpg', difficulty: 'hard'},
  { question: 'What is the width of a boat called?', answer: 'Beam', Image: 'src/assets/Beam.jpg', difficulty: 'hard'},
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