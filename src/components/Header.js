import styles from '../styles/Header.module.css';

export default function Header({ currentScore, bestScore }) {
  return (
    <div className={styles.header}>
      <h1>Adventure Time</h1>
      <div className={styles.group}>
        <p>
          Current Score:<span>{currentScore}</span>
        </p>
        <p>
          Best Score: <span>{bestScore}</span>
        </p>
      </div>
    </div>
  );
}
