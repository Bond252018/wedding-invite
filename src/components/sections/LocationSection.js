import React from 'react';
import styles from './LocationSection.module.css';

const LocationSection = () => {
  return (
    <section className={styles.locationSection}>
      <div className={styles.locationContent}>
        <div className={styles.curvedTop}></div>
        <h2 className={styles.locationTitle}>ЛОКАЦИЯ</h2>
        <div className={styles.locationDetails}>
          <p className={styles.venueName}>📍 Локация штаба</p>
          <p className={styles.venueAddress}>Заміський комплекс Equides Club</p>
          <p className={styles.venueAddress}>Київська область, неподалік від центру столиці</p>
        </div>
        <div className={styles.locationImage}>
          <img 
            src="/images/location.jpg" 
            alt="Equides Club"
            className={styles.locationPhoto}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className={styles.imagePlaceholder}>
              <div className={styles.bottomIcon}>
                 <div className={styles.diamondIcon}>◆</div>
              </div>
            <div className={styles.imageText}>Equides Club</div>
            <div className={styles.locationDescription}>
              Заміський комплекс з концепцією оздоровлення та відпочинку
            </div>
          </div>
        </div>
        <button 
          className={styles.routeButton}
          onClick={() => window.open('https://www.equides.com.ua/', '_blank')}
        >
          ПОСТРОИТЬ МАРШРУТ
        </button>
      </div>
    </section>
  );
};

export default LocationSection; 