import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ThirdScene.scss';

function ThirdScene() {
gsap.registerPlugin(ScrollTrigger)

useEffect(() =>{
    gsap.to('#jacquesbrel', {
      scrollTrigger: {
        trigger: '.ThirdScene',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        // markers: true
      },
      left: 300,
    })
    gsap.to('#zizou', {
        scrollTrigger: {
          trigger: '.ThirdScene',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        //   markers: true
        },
        right: 300,
      })
  
  }, [])
    return (
      <div className='ThirdScene'>
      <img id='jacquesbrel' className='animate' src="/src/assets/Jak.png" alt="Jacques Brel" />
  
      <p className='image-text'>BARTHEZ À LA COUPE DU MONDE 1998</p>
      <img id='zizou' src="/src/assets/Zizou.png" className='animate' alt="zizou le meilleur chauve" />
  </div>
    );
}

export default ThirdScene;