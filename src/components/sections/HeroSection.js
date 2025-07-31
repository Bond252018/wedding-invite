import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroImage}>
          <img 
            src="/images/hero-photo.jpg" 
            alt="Константин и Дарья"
            className={styles.heroPhoto}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        </div>
        
        <div className={styles.heroText}>
          <h1 className={styles.names}>КОНСТАНТИН & ДАРЬЯ</h1>
          <p className={styles.invitationText}>приглашаем на нашу свадьбу</p>
        </div>
        
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 