import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FifthScene.scss'

function FifthScene() {
    gsap.registerPlugin(ScrollTrigger)

useEffect(() =>{
    gsap.to('#eiffel', {
      scrollTrigger: {
        trigger: '.FifthScene',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        // markers: true
      },
      left: 300,
    })
    gsap.to('#wine3', {
        scrollTrigger: {
          trigger: '.FifthScene',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        //   markers: true
        },
        right: 300,
      })
  
  }, [])
    return (
        <div className='FifthScene'>
            <img id='eiffel' className='animate' src="/src/assets/eiffel.png" alt="Cocorico" />
            <img id='wine3' src="/src/assets/wine3.png" className='animate' alt="wine3" />
        </div>
    );
}

export default FifthScene;