
import React, {useEffect} from 'react';
import "../Loader/Loader.scss";
import croissant from "../assets/croissant.png"

function Loader() {
  useEffect(() => {
    // Fonction à exécuter à l'initialisation du composant
    function handleCroissant() {
      const loader = document.querySelector('.loader');
      loader.classList.add('disappear');
      loader.addEventListener('animationend', () => {
        loader.classList.add('displayNone');
      });
    }

    // Appeler la fonction handleCroissant à l'initialisation
    handleCroissant();
  }, []); // Le tableau vide [] signifie que cela s'exécute uniquement à l'initialisation

  return (
    <div className="loader">
      <img className='croissant' src={croissant} width="150px" height="150px" alt="image de croissant"/>
    </div>
  );
}

export default Loader;
