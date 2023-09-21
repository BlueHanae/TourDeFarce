import React, { useEffect } from 'react';
import gsap from 'gsap';

// Importer les images
import tourEiffelImg from '../../assets/scene1.jpeg'; 

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
        </div>
    );
}

export default TourEiffelScene;
