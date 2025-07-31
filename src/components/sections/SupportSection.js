import React from 'react';
import styles from './SupportSection.module.css';

const SupportSection = () => {
  return (
    <section className={styles.supportSection}>
      <div className={styles.supportContent}>
        <h2 className={styles.supportTitle}>СЕКРЕТНО.<br />
            🎁 РАЗДЕЛ: ПОДАРКИ</h2>
        <div className={styles.supportList}>
          <div className={styles.supportItem}>
            <span className={styles.supportText}>
              <strong>
                В рамках операции «Свадьба» флористические дары агенту Дарье аннулируются❗️
                Вместо них: каждый агент приносит бутылку 🍾 с шифром —
                надписью, пожеланием или шуткой.
              </strong> 
            </span>
          </div>
          <div className={styles.supportItem}>
            <span className={styles.supportText}>
              <strong>
                📌 Тип содержимого — на усмотрение агента (но без воды, мы не в разведке под прикрытием).
                Это — ваш входной код на банкет.
              </strong> (шутки, тосты, объятия)
            </span>
          </div>
          <div className={styles.supportItem}>
            <span className={styles.supportText}>
              <strong>Цветы в миссии бесполезны, а вот бутылка может изменить ход событий.</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection; 