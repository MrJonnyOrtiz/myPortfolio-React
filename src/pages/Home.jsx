import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import headshot from '../assets/headshot.smallerSize.webp';

import { useGreeting } from '../hooks/useGreeting';
import { useEasterEgg } from '../hooks/useEasterEgg';
import { useAnalytics } from '../hooks/useAnalytics';

function Home() {
  const greeting = useGreeting();
  const { easterEggFound, funFact, handleEasterEggClick, handleCloseClick } =
    useEasterEgg();
  useAnalytics('homePage');

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
        <div className="absolute inset-0 rounded bg-white opacity-80"></div>
        {/* Softer Overlay */}
        <div className="relative z-10 flex flex-col gap-3 space-y-8 py-8">
          <h1 className="animate-fade-in-down text-4xl font-extrabold text-gray-800 md:text-6xl lg:text-7xl">
            {greeting}
          </h1>
          <img
            src={headshot}
            className="mx-auto h-auto w-48 transform rounded-full shadow-lg transition-transform duration-300 hover:scale-105 sm:hidden"
            // className="mx-auto h-auto w-1/3 rounded-full sm:hidden"
            alt="Jonny Ortiz smiling headshot"
            onClick={handleEasterEggClick}
            aria-label="Click for a fun fact"
          />
          <p className="mx-auto max-w-2xl animate-fade-in text-lg text-gray-700 md:text-xl lg:text-2xl">
            I&apos;m Jonny, a Full Stack Developer passionate about building
            user-friendly web apps that make life easier.
          </p>
          <p className="mx-auto max-w-2xl animate-fade-in text-lg text-gray-700 delay-200 md:text-xl lg:text-2xl">
            A lifelong learner, I currently specialize in serverless React
            applications on AWS.
          </p>
          <Link
            to="/projects"
            className="mx-auto w-fit transform animate-bounce-custom rounded-full bg-blue-500 px-6 py-3 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl"
            aria-label="Explore my latest projects"
            title="Explore my latest projects"
            onClick={() => {
              if (window.fathom) {
                window.fathom.trackEvent('HOME_EXPLORE_PROJECTS_CLICK');
              }
            }}
          >
            Explore My Latest Projects
          </Link>
        </div>
      </main>

      {/* Easter Egg Element */}
      {easterEggFound && (
        <div
          className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={handleCloseClick} // Close when clicking outside modal
        >
          <div
            className="relative mx-4 max-w-sm scale-95 transform animate-zoom-in rounded-lg bg-white p-8 text-center shadow-2xl transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={handleCloseClick}
              className="absolute right-3 top-3 text-2xl font-bold text-gray-500 hover:text-gray-800"
              aria-label="Close fun fact"
            >
              &times;
            </button>
            <h2 className="mb-4 text-3xl font-extrabold text-blue-500">
              Fun Fact!
            </h2>
            <p className="mb-6 max-w-prose text-lg text-gray-700">{funFact}</p>
            <button
              onClick={handleCloseClick}
              className="rounded-full bg-blue-500 px-5 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
