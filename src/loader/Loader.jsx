
import React, {useEffect, useState} from 'react';
import "../Loader/Loader.scss";
import croissant from "../assets/croissant.png"
import Footer from "../footer/footer";
import Parcours from '../Parcours/Parcours';

function Loader() {
  const [isFinished, setIsFinished] = useState(false);
  useEffect(() => {
    // Fonction à exécuter à l'initialisation du composant
    function handleCroissant() {
      const loader = document.querySelector('.loader');
      loader.classList.add('disappear');
      loader.addEventListener('animationend', () => {
        setIsFinished(true)
        loader.classList.add('displayNone');
      });
    }

    // Appeler la fonction handleCroissant à l'initialisation
    handleCroissant();
  }, []); // Le tableau vide [] signifie que cela s'exécute uniquement à l'initialisation

  return (
    <div className='bg-gradient'>
      {isFinished ? <Parcours /> : "" }
      <div className="loader">
        <img className='croissant' src={croissant} width="150px" height="150px" alt="image de croissant"/>
      </div>
      
    </div>
  );
}

export default Loader;
