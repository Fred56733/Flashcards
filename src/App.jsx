import './App.css';
import { useState } from 'react';

const flashcards = [
  { question: 'What is 2+2?', answer: '4' },
  { question: 'Question 2', answer: 'Answer 2' },
  { question: 'Question 3', answer: 'Answer 3' },
  { question: 'Question 4', answer: 'Answer 4' },
  { question: 'Question 5', answer: 'Answer 5' },
]

const App = () => {
  const [state, setstate] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const cardClicked = () => {
    setIsFlipped(!isFlipped)
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
    </div>
  )
}

export default App