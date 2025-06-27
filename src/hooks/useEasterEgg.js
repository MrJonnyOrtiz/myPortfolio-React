import { useState } from 'react';
import { funFacts } from '../../data.js'; // Adjust path as needed

export function useEasterEgg() {
  const [easterEggFound, setEasterEggFound] = useState(false);
  const [funFact, setFunFact] = useState('');

  const handleEasterEggClick = () => {
    setEasterEggFound(true);
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFunFact(randomFact);
  };

  const handleCloseClick = () => {
    setEasterEggFound(false);
    setFunFact(''); // Clear the fun fact when closing
  };

  return { easterEggFound, funFact, handleEasterEggClick, handleCloseClick };
}
