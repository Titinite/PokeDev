import React, { useState, useEffect } from "react";

const useFight = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 0) {
        setStep(1); 
      } else if (step === 1) {
        setStep(2);
      } else if (step === 2) {
        setStep(3);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div>
        <h2>Mon combat</h2>
        {step === 1 && <p>Un Pokémon apparait !</p>}
        {step === 2 && <p>Le combat commence !</p>}
        {step === 3 && <p>Vous avez gagné le combat !</p>}
    </div>
  );
};

export default useFight;
