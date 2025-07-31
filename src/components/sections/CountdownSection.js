import React from 'react';
import styles from './CountdownSection.module.css';

const CountdownSection = ({ days, hours, minutes, seconds }) => {
  return (
    <section className={styles.countdownSection}>
      <div className={styles.countdownContent}>
        <div className={styles.countdownImage}>
          <img 
            src="/images/countdown-photo.jpg" 
            alt="Константин и Дарья"
            className={styles.countdownPhoto}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        </div>
        
        <div className={styles.countdownText}>
          <h2 className={styles.countdownTitle}>
            ДО МИССИИ ОСТАЛОСЬ:
          </h2>
          
          <div className={styles.countdownTimer}>
            <div className={styles.timeUnit}>
              <span className={styles.timeNumber}>{days}</span>
              <span className={styles.timeLabel}>дней</span>
            </div>
            <div className={styles.timeSeparator}>:</div>
            <div className={styles.timeUnit}>
              <span className={styles.timeNumber}>{hours}</span>
              <span className={styles.timeLabel}>часов</span>
            </div>
            <div className={styles.timeSeparator}>:</div>
            <div className={styles.timeUnit}>
              <span className={styles.timeNumber}>{minutes}</span>
              <span className={styles.timeLabel}>минут</span>
            </div>
            <div className={styles.timeSeparator}>:</div>
            <div className={styles.timeUnit}>
              <span className={styles.timeNumber}>{seconds}</span>
              <span className={styles.timeLabel}>секунд</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection; 