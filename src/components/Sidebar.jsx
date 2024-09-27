import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.smallerSize.webp';
import reactLogo from '../assets/react.svg';
import awsLogo from '../assets/amazonaws.svg';

import PropTypes from 'prop-types';

function Sidebar({ menu }) {
  return (
    <aside className="hidden rounded-lg bg-white/80 p-4 text-center shadow-lg sm:block">
      <Link to="/" aria-label="Go to Home" className="my-3 flex flex-col gap-3">
        <img
          className="mx-auto rounded-full"
          src={headshot}
          alt="Jonny Ortiz headshot"
          width="150"
          height="150"
        />
        <h1 className="text-xl font-bold text-gray-800">Jonny Ortiz</h1>
      </Link>
      <div className="my-3 flex flex-col gap-3">
        <p className="font-semibold text-gray-700">Full Stack Developer</p>
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
        <ul className="grid gap-3 rounded-lg bg-green-300 p-3 font-semibold shadow-md">
          {menu.map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="mx-auto block w-[75%] rounded-full bg-gray-800 p-3 text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-800"
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
    </aside>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
};
