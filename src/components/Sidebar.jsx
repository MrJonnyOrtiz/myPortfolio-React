import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.smallerSize.webp';
import reactLogo from '../assets/react.svg';
import awsLogo from '../assets/amazonaws.svg';

import { useEasterEgg } from '../hooks/useEasterEgg';

import PropTypes from 'prop-types';

function Sidebar({ menu }) {
  const { easterEggFound, funFact, handleEasterEggClick, handleCloseClick } =
    useEasterEgg();
  return (
    <aside className="hidden rounded-lg bg-white/80 p-4 text-center shadow-lg sm:block">
      <img
        src={headshot}
        className="mx-auto transform cursor-pointer rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        alt="Jonny Ortiz smiling headshot"
        width="150"
        height="150"
        onClick={handleEasterEggClick}
        aria-label="Click for a fun fact"
      />
      <h1 className="py-3 text-xl font-bold text-gray-800">
        <Link
          to="/"
          aria-label="Go to Home"
          className="transition-colors duration-200 hover:text-blue-600 hover:underline"
        >
          Jonny Ortiz
        </Link>
      </h1>
      <p className="font-semibold text-gray-700">Full Stack Developer</p>
      <div className="my-3 flex flex-col gap-3">
        <div className="flex items-center justify-center gap-3">
          <div className="mx-auto w-fit rounded-lg bg-white px-2 py-2 text-gray-800 shadow-md">
            <img
              src={reactLogo}
              alt="React logo"
              width="50"
              height="50"
              className="mx-auto"
            />
            <p>React</p>
          </div>
          <div className="mx-auto w-fit rounded-lg bg-white px-2 py-2 text-gray-800 shadow-md">
            <img
              src={awsLogo}
              alt="AWS logo"
              width="50"
              height="50"
              className="mx-auto"
            />
            <p>AWS</p>
          </div>
        </div>
      </div>
      <nav className="my-3 grid">
        <ul className="grid gap-3 rounded-lg bg-white/70 p-3 font-semibold shadow-md">
          {menu.map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="mx-auto block w-[75%] rounded-full bg-blue-500 p-3 text-white shadow-lg transition duration-300 hover:bg-white hover:text-blue-600"
                aria-label={`Go to ${item}`}
                title={`Go to ${item}`}
                onClick={() => {
                  if (window.fathom) {
                    window.fathom.trackEvent(
                      `SIDEBAR_NAV_${item
                        .replace(/[^a-zA-Z0-9_]/g, '')
                        .toUpperCase()}`,
                    );
                  }
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="my-3 flex justify-center">
        <a
          href="https://www.linkedin.com/in/jonny-ortiz/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
          onClick={() => {
            if (window.fathom) {
              window.fathom.trackEvent('SIDEBAR_LINKEDIN_CLICK');
            }
          }}
          className="transition duration-300 hover:scale-110"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 fill-current text-blue-600 transition duration-300 hover:text-blue-400"
          >
            <title>LinkedIn</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
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
              title="Close fun fact"
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
    </aside>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
};
