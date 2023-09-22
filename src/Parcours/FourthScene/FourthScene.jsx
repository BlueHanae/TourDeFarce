import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FourthScene.scss'

function FourthScene() {
    gsap.registerPlugin(ScrollTrigger)

useEffect(() =>{
    gsap.to('#coq', {
      scrollTrigger: {
        trigger: '.FourthScene',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        // markers: true
      },
      left: 300,
    })
    gsap.to('#joconde', {
        scrollTrigger: {
          trigger: '.FourthScene',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        //   markers: true
        },
        right: 300,
      })
  
  }, [])
    return (
        <div className='FourthScene'>
            <img id='coq' className='animate' src="/src/assets/coq.png" alt="Cocorico" />
            <img id='joconde' src="/src/assets/joconde.png" className='animate' alt="JoConde" />
        </div>
    );
}

export default FourthScene;