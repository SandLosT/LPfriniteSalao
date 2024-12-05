import * as React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Style from './Header.module.css';

function BackgroundCp() {
  const [blurLevel, setBlurLevel] = useState(0); // Estado para controlar o nível de desfoque

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Obtém a posição do scroll
    const maxBlur = 10; // Define o valor máximo de desfoque
    const blurValue = Math.min(Math.floor(scrollPosition / 100), maxBlur); // Ajusta o nível de desfoque
    setBlurLevel(blurValue);
  };

  useEffect(() => {
    // Adiciona o evento de scroll
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Limpa o evento ao desmontar
  }, []);

  return (
    <section
      className={`${Style.backgroundimage} ${Style[`blur-${blurLevel}`]}`} // Combina as classes
    >
      <Header />
    </section>
  );
}

export default BackgroundCp;
