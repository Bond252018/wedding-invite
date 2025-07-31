import React from 'react';
import styles from './DressCodeSection.module.css';

const DressCodeSection = () => {
  const womenColors = ['#50684e', '#781d27', '#9d3c34', '#ac8b59'];
  const menColors = ['#000', '#fff', '#000'];

  return (
    <section className={styles.dressCodeSection}>
      <div className={styles.dressCodeContent}>
        <div className={styles.curvedTop}></div>
        
        <h2 className={styles.dressCodeTitle}>ДРЕСС-КОД</h2>

        <div className={styles.colorPalettes}>
          <div className={styles.paletteSection}>
            <h3 className={styles.paletteTitle}>Девушки:</h3>
            <div className={styles.colorSwatches}>
              {womenColors.map((color, index) => (
                <div 
                  key={index} 
                  className={styles.colorSwatch}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          
          <div className={styles.paletteSection}>
            <h3 className={styles.paletteTitle}>Мужчины:</h3>
            <div className={styles.colorSwatches}>
              {menColors.map((color, index) => (
                <div 
                  key={index} 
                  className={styles.colorSwatch}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection; 