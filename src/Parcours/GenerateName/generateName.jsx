import React, { useState } from 'react';
import './generateName.scss'

const GenerateName = () => {
  const [randomName, setRandomName] = useState('');
  const [randomImage, setRandomImage] = useState('');

  // Fonction pour obtenir un nom aléatoire depuis le back-end
  const getRandomName = () => {
    fetch('https://tdf-9qchqeltz-steiningermaxime.vercel.app/api/generate-name.js')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRandomName(data.name);
        setRandomImage(data.image); 
      })
      .catch((error) => console.error('Erreur:', error));
  };

  return (
    <div className="generate-name-container">
      <button onClick={getRandomName}>De Napoléon à Kylian, qui es-tu dans l'âme ?</button>
      <div className="random-name">
        {randomName && <p>{randomName}</p>}
        {randomImage && <img src={randomImage} alt={randomName} />}
      </div>
    </div>
  );
};

export default GenerateName;
