import React, { useEffect, useState } from 'react';
import { Scrollama, Step } from 'react-scrollama'; 
import sceneParis from "../../assets/scene1.jpeg"

const SecondScene = () => {
  const [stepData, setStepData] = useState({
    currentStep: 0,
    steps: [
      { id: 'start', offset: 0.2 },
      { id: 'end', offset: 0.8 },
    ],
  });

  const handleStepEnter = ({ data }) => {
    setStepData({ ...stepData, currentStep: data });
  };

  useEffect(() => {
    // Add your animation logic here based on stepData.currentStep
  }, [stepData.currentStep]);

  return (
    <section>
      <Scrollama onStepEnter={handleStepEnter} offset={0.7}>
        {stepData.steps.map(step => (
          <Step key={step.id} data={step.id}>
            <div className="content">
              {/* Afficher l'image uniquement pour l'étape 'start' */}
              {step.id === 'start' && (
                <img className='imgParis'
                  src={sceneParis}
                  alt="peinture scene parisienne"
                  style={{
                    transform: `translateX(${stepData.currentStep === step.id ? 0 : -100}%)`,
                    opacity: stepData.currentStep === step.id ? 1 : 0,
                    transition: 'transform 1s, opacity 1s',
                  }}
                />
              )}
            </div>
          </Step>
        ))}
      </Scrollama>
    </section>
  );
};

export default SecondScene;
