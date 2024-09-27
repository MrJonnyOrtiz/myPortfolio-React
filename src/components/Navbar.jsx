import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

import PropTypes from 'prop-types';

function Navbar({ menu }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  return (
    <nav className="flex items-center justify-between rounded-lg bg-white/70 p-4 shadow-lg sm:hidden">
      <Link to="/home" aria-label="Go to Home">
        <h1 className="text-xl font-bold text-gray-800">Jonny Ortiz</h1>
      </Link>
      <div className="relative">
        <button
          aria-label={isDropdownVisible ? 'Close menu' : 'Open menu'}
          onClick={toggleDropdown}
          className="rounded-lg bg-green-300 p-2 text-gray-800 shadow-md transition duration-300 hover:bg-green-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isDropdownVisible ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            )}
          </svg>
        </button>
        {isDropdownVisible && (
          <Dropdown items={menu} handleDropdownVisible={setDropdownVisible} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  menu: PropTypes.array.isRequired,
};
