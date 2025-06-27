import { useState, useEffect } from 'react';

export function useGreeting() {
  const [greeting, setGreeting] = useState('Hello and Welcome!');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning!');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon!');
    } else {
      setGreeting('Good Evening!');
    }
  }, []);

  return greeting;
}
