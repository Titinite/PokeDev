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
    }, 8000);

    return () => clearTimeout(timer);
  }, [step]);

  return step;
};

export default useFight;
