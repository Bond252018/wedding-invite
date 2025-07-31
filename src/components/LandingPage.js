import React, { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';

const LandingPage = ({ onOpenInvite }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [showOpenButton, setShowOpenButton] = useState(false);
  const [hideLoadingSubtext, setHideLoadingSubtext] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoadingSubtext(true);
      setTimeout(() => setShowOpenButton(true), 200); // fade out subtext, then fade in button
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.landingPage}>
      <div className={styles.content}>
        <div className={styles.loadingScreen}>
          <div className={styles.loadingContent}>
            <div className={styles.loadingText}>
              <div className={styles.nameRow}>
                <span>К</span>
                <span>О</span>
                <span>Н</span>
                <span>С</span>
                <span>Т</span>
                <span>А</span>
                <span>Н</span>
                <span>Т</span>
                <span>И</span>
                <span>Н</span>
              </div>
              <div className={styles.ampersand}>&</div>
              <div className={styles.nameRow}>
                <span>Д</span>
                <span>А</span>
                <span>Р</span>
                <span>Ь</span>
                <span>Я</span>
              </div>
            </div>
            <div className={styles.loadingBar}>
              <div className={styles.loadingProgress}></div>
            </div>
            <div className={
              styles.loadingSubtext + ' ' + (hideLoadingSubtext ? styles.fadeOut : styles.fadeIn)
            }>
              Загрузка приглашения...
            </div>
          </div>
          <div className={styles.sparkles}>
            {[...Array(20)].map((_, i) => (
              <div key={i} className={styles.sparkle} style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}></div>
            ))}
          </div>
          <button
            className={
              styles.openButton +
              (isButtonHovered ? ' ' + styles.hovered : '') +
              (showOpenButton ? ' ' + styles.fadeIn : ' ' + styles.fadeOut)
            }
            style={{ pointerEvents: showOpenButton ? 'auto' : 'none' }}
            onClick={onOpenInvite}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            <span className={styles.buttonText}>ОТКРЫТЬ ПРИГЛАШЕНИЕ</span>
            <div className={styles.buttonGlow}></div>
          </button>
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.mainText}>
            НАЖМИТЕ, ЧТОБЫ ПОГРУЗИТЬСЯ В АТМОСФЕРУ МЕРОПРИЯТИЯ
          </h1>
        </div>
      </div>
      <div className={styles.sparkles}>
        {[...Array(15)].map((_, i) => (
          <div key={i} className={styles.sparkle} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}></div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage; 