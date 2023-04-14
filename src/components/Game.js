import { useState, useEffect } from 'react';
import styles from '../styles/Game.module.css';
import Header from './Header';
import CardGrid from './CardGrid';
import { images } from '../utils/imagesData';

export default function Game() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffledCards = shuffle(images);
    setCards(shuffledCards);
  }, []);

  function handleCardClick(clickedCard) {
    if (clickedCard.isClicked) {
      alert(`Oops ${clickedCard.name} is already clicked!`);
      currentScore > bestScore && setBestScore(currentScore);
      setCurrentScore(0);

      const updatedCards = cards.map(card => {
        if (card.isClicked) {
          return { ...card, isClicked: false };
        }
        return card;
      });

      const shuffledCards = shuffle(updatedCards);
      setCards(shuffledCards);
      return;
    }

    const updatedCards = cards.map(card => {
      if (card.id === clickedCard.id) {
        return { ...card, isClicked: true };
      }
      return card;
    });

    setCurrentScore(currentScore + 1);
    const shuffledCards = shuffle(updatedCards);
    setCards(shuffledCards);
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className={styles.main}>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}
