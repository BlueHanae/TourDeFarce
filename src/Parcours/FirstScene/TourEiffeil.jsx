import gainsbourgImg from '../../assets/gainsbourg.png';
import React, { useEffect } from 'react';
import gsap from 'gsap';

import './TourEiffeil.scss';

const TourEiffelScene = () => {
  useEffect(() => {
    gsap.to('.serge', { opacity: 1, y: 0, duration: 2 });
    gsap.to('.text-bubble', { opacity: 1, duration: 2, delay: 2 });
  }, []);

  return (
    <div className="tour-eiffel-scene">
      <div className="serge">
        <img src={gainsbourgImg} alt="Serge Gainsbourg" />
        <div className="text-bubble">
        Moi c'est Serge Gainsbarre ! Bienvenue au Tour de Farce.
        </div>
      </div>
    </div>
  );
};

export default TourEiffelScene;
