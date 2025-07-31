import React from 'react';
import styles from './GreetingSection.module.css';

const GreetingSection = () => {
  return (
    <section className={styles.greetingSection}>
      <div className={styles.greetingContent}>
        <div className={styles.greetingHeader}>
          <h2 className={styles.greetingTitle}>Операция "Свадьба"</h2>
        </div>
        <div className={styles.greetingText}>
          <p>
            🕶  
          </p>
          <p>
            <strong>КОДОВОЕ СЛОВО:</strong> #Навсегда<br/>
            <strong>СТАТУС МИССИИ:</strong> Активирована<br/>
            <p className={styles.greetingTime}>
              <strong>⏰ ВРЕМЯ ЛЮБОВНОЙ ОПЕРАЦИИ:</strong> <span className={styles.redTime}>12:00</span>
            </p>
            <strong>ЦЕЛЬ:</strong> Спасти мир от одиночества (начать с себя)
          </p>
          <p>
            Два агента — Константин и Дарья — успешно прошли обучение в условиях повышенной эмоциональной нагрузки:
          </p>
          <ul className={styles.missionList}>
            <li>— прошлые некудышные «встречи»</li>
            <li>— совместный отдых</li>
            <li>— переезд</li>
            <li>— выбор еды без ссор</li>
            <li>— утренние разговоры с кофе</li>
            <li>— сон на сумасшедшей груди Кости</li>
          </ul>
          <p>
            <strong className={styles.highlight}>Миссия: УЗАКОНИТЬ ЛЮБОВЬ.</strong><br/>
            Свадьба назначена. Гости — обозначены.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GreetingSection; 