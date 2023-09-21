import React, { useEffect } from 'react';
import gsap from 'gsap';

// Importer les images
import tourEiffelImg from '../../assets/croissant.png'; // Mettez à jour le chemin d'accès en conséquence
import arbreImg from '../../assets/joconde.png'; 

const TourEiffelScene = () => {

    useEffect(() => {
        gsap.from('.eiffel', { y: -100, duration: 2, yoyo: true, repeat: -1 });
        gsap.from('.tree', { x: 10, duration: 1, yoyo: true, repeat: -1 });
    }, []);

    return (
        <div className="tour-eiffel-scene">
            <div className="eiffel">
                <img src={tourEiffelImg} alt="Tour Eiffel" />
            </div>
            <div className="tree">
                <img src={arbreImg} alt="Arbre" />
            </div>
            {/* Ajoutez d'autres éléments et animations ici */}
        </div>
    );
}

export default TourEiffelScene;
