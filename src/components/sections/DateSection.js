import React from 'react';
import styles from './DateSection.module.css';

const DateSection = () => {
  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const weddingDay = 13;

  return (
    <section className={styles.dateSection}>
      <div className={styles.dateContent}>
        <h2 className={styles.monthTitle}>СЕНТЯБРЬ</h2>
        <div className={styles.calendar}>
          {calendarDays.map((day) => (
            <div
              key={day}
              className={`${styles.calendarDay} ${day === weddingDay ? styles.weddingDay : ''}`}
            >
              {day === weddingDay ? (
                <span className={styles.heartWrapper}>
                  <span className={styles.heart} role="img" aria-label="heart">❤️</span>
                  <span className={styles.dayNumberOnHeart}>{day}</span>
                </span>
              ) : (
                <span className={styles.dayNumber}>{day}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DateSection; 