import React, { useState, useEffect, useRef } from 'react';
import styles from './WeddingInvite.module.css';
import HeroSection from './sections/HeroSection';
import GreetingSection from './sections/GreetingSection';
import DateSection from './sections/DateSection';
import GallerySection from './sections/GallerySection';
import LocationSection from './sections/LocationSection';
import DressCodeSection from './sections/DressCodeSection';
import SupportSection from './sections/SupportSection';
import CountdownSection from './sections/CountdownSection';
import ActionSection from './sections/ActionSection';



const WeddingInvite = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const weddingDate = new Date('2025-09-13T16:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Автовоспроизведение музыки при открытии приглашения
  useEffect(() => {
    if (audioRef.current) {
      // Попытка автовоспроизведения
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsMusicPlaying(true);
          })
          .catch(error => {
            console.log('Автовоспроизведение заблокировано браузером:', error);
            // Музыка не будет воспроизводиться автоматически, но кнопка будет работать
          });
      }
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsMusicPlaying(true);
            })
            .catch(error => {
              console.log('Ошибка воспроизведения:', error);
            });
        }
      }
    }
  };

  const timeLeft = weddingDate - currentTime;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className={styles.weddingInvite}>
      <audio
        ref={audioRef}
        loop
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
      >
        <source src="/music/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button 
        className={`${styles.musicToggle} ${isMusicPlaying ? styles.playing : ''}`}
        onClick={toggleMusic}
        aria-label={isMusicPlaying ? 'Выключить звук' : 'Включить звук'}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          {isMusicPlaying ? (
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          ) : (
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          )}
        </svg>
      </button>

      <HeroSection />
      <GreetingSection />
      <DateSection />
      <GallerySection />
      
      
      <DressCodeSection />
      <SupportSection />
      <LocationSection />
      <ActionSection />
      <CountdownSection days={days} hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
};

export default WeddingInvite; 