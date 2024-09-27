import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.smallerSize.webp';

function Home() {
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
    <main
      className="relative grid gap-8 bg-cover bg-center bg-no-repeat p-6 text-center"
      style={{ backgroundImage: "url('/fullStackVisual.webp')" }}
    >
      <div className="absolute inset-0 bg-white opacity-80"></div>
      {/* Softer Overlay */}
      <div className="relative z-10 flex flex-col gap-3 space-y-8">
        <h1 className="text-3xl font-semibold text-gray-800 md:text-5xl lg:text-7xl">
          Hello and Welcome!
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
  );
}

export default Home;
