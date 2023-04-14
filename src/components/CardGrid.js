import Card from './Card';
import styles from '../styles/CardGrid.module.css';

export default function CardGrid({ cards, onCardClick }) {
  return (
    <div className={styles.container}>
      {cards.map(card => (
        <Card
          card={card}
          key={card.id}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}
