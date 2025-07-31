import React from 'react';
import styles from './ActionSection.module.css';

const ActionSection = () => {
  return (
    <section className={styles.actionSection}>
      <div className={styles.actionContent}>
        <div className={styles.curvedTop}></div>

        <h2 className={styles.actionTitle}>ПРОГРАММА ДЕЙСТВИЙ</h2>

        <div className={styles.actionText}>
          <p><strong>📋 Инструкции к миссии:</strong></p>
          <ul className={styles.missionList}>
            <li>— Прибытие на точку сбора (локацию) не позже 11:45</li>
            <li>— Маскировка в нарядах — соблюсти дресс-код</li>
            <li>— Поддерживать атмосферу праздника</li>
            <li>— Фото- и видеозахват моментов счастья</li>
            <li>— Участвовать в танцевальных манёврах</li>
            <li>— Наслаждаться каждым мгновением ❤️</li>
          </ul>
        </div>
        <div className={styles.ps}>
          <p><strong>P.S.</strong></p>
          <p>Будьте на месте вовремя.</p>
          <p>Агенты любви действуют точно, весело и без повторов.</p>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
