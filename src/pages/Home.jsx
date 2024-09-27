import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import headshot from '../assets/headshot.smallerSize.webp';

import { funFacts } from '../../data.js';

function Home() {
  const [greeting, setGreeting] = useState('Hello and Welcome!');
  const [easterEggFound, setEasterEggFound] = useState(false);
  const [funFact, setFunFact] = useState('');

  // Handle clicking the Easter egg
  const handleEasterEggClick = () => {
    setEasterEggFound(true);
    // Randomly select a fun fact
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFunFact(randomFact);
  };

  // Handle closing the fun fact message
  const handleCloseClick = () => {
    setEasterEggFound(false);
  };

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

  useEffect(() => {
    try {
      // Check if the user has given consent for analytics in localStorage
      const isConsentGiven = localStorage.getItem('cookieConsent') === 'true';

      if (isConsentGiven && window.gtag) {
        window.gtag('event', 'homePage');
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main
        className="relative grid gap-8 bg-cover bg-center bg-no-repeat p-6 text-center"
        style={{ backgroundImage: "url('/fullStackVisual.webp')" }}
      >
        <div className="absolute inset-0 bg-white opacity-80"></div>
        {/* Softer Overlay */}
        <div className="relative z-10 flex flex-col gap-3 space-y-8">
          <h1 className="text-3xl font-semibold text-gray-800 md:text-5xl lg:text-7xl">
            {greeting}
          </h1>
          <img
            src={headshot}
            className="mx-auto h-auto w-1/3 rounded-full sm:hidden"
            alt="Jonny Ortiz smiling headshot"
          />
          <p className="mx-auto max-w-2xl text-lg text-gray-700 md:text-xl lg:text-2xl">
            I&apos;m Jonny, a Full Stack Developer passionate about building
            user-friendly web apps that make life easier.
          </p>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 md:text-xl lg:text-2xl">
            A lifelong learner, I currently specialize in serverless React
            applications on AWS.
          </p>
          <Link
            to="/projects"
            className="mx-auto w-fit rounded-full bg-green-300 px-4 py-2 font-semibold text-gray-800 shadow-md transition duration-300 hover:bg-green-400"
          >
            Explore My Latest Projects
          </Link>
        </div>
      </main>
      {/* Easter Egg Element */}
      {!easterEggFound && (
        <div
          onClick={handleEasterEggClick}
          className="animate-bounce-custom cursor-pointer p-3 text-right text-3xl"
        >
          🥚
        </div>
      )}

      {/* Display fun fact when the Easter egg is found */}
      {easterEggFound && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-md bg-white p-6 text-center shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Fun Fact!</h2>
            <p className="mb-4 max-w-prose text-lg">{funFact}</p>
            <button
              onClick={handleCloseClick}
              className="rounded-full bg-green-300 px-4 py-2 text-black transition duration-300 hover:bg-green-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
