import styles from '../styles/Card.module.css';

export default function Card({ card, onCardClick }) {
  return (
    <div className={styles.card} onClick={() => onCardClick(card)}>
      <img src={card.url} />
      <p>{card.name}</p>
    </div>
  );
}
