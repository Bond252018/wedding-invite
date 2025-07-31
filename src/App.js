import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import WeddingInvite from './components/WeddingInvite';
import './App.module.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  useEffect(() => {
    // Симуляция загрузки
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenInvite = () => {
    setIsInviteOpen(true);
  };


  if (!isInviteOpen) {
    return <LandingPage onOpenInvite={handleOpenInvite} />;
  }

  return <WeddingInvite />;
}

export default App; 