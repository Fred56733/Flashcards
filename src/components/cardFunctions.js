// When the Flashcard is clicked it sets the state
const cardClicked = (isFlipped, setIsFlipped) => {
    setIsFlipped(!isFlipped)
};

// Sets the state to the next card and makes sure the card is not flipped
const nextCard = (setIsFlipped, setstate, flashcards) => {
    setIsFlipped(false)
    setTimeout(() => {
      setstate((prevState) => (prevState + 1) % flashcards.length)
    }, 300);
};

// Sets the state to the previous card and makes sure the card is not flipped
const prevCard = (setIsFlipped, setstate, flashcards) => {
    setIsFlipped(false)
    setTimeout(() => {
      setstate((prevState) => (prevState - 1 + flashcards.length) % flashcards.length)
    }, 300);
};

// Checks if the answer is correct
const guessAnswer = (flashcards, guess) => {
    if (flashcards.answer === guess) {
        alert('Correct!')
    }
    else {
        alert('Incorrect!')
    }
};

// Shuffles the cards and makes sure the card is not showing the answer
const shuffleCard = (setIsFlipped, setstate, flashcards, setFlashcards) => {
    setIsFlipped(false)
    setTimeout(() => {
        const shuffledFlashcards = flashcards.sort(() => Math.random() - 0.5)
        setFlashcards(shuffledFlashcards);
        setstate(0)
    })
};

export { cardClicked, nextCard, prevCard, guessAnswer, shuffleCard };