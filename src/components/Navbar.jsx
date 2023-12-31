/* eslint-disable react/prop-types */

import { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '/JOlogoNoText.jpg';
import Dropdown from './Dropdown';

function Navbar({ menu }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((viz) => !viz);
  };

  return (
    <ul className="flex flex-none items-center justify-around rounded-xl p-5 shadow-2xl sm:hidden">
      {/* <div>
        <Link to="/home">
          <img
            src={logo}
            alt="My logo"
            width="50px"
            height="50px"
            className="rounded-full"
          />
        </Link>
      </div> */}
      <li>
        <Link to="/home">
          <div>
            <h1 className="px-3 text-xl font-bold">Jonny Ortiz</h1>
          </div>
        </Link>
      </li>
      <li>
        <div className="relative">
          {!isDropdownVisible && (
            <button
              id="openMenuBtn"
              aria-label="Open menu"
              onClick={toggleDropdown}
              className="rounded-xl bg-[#ff914d]/[.8] p-2 text-[#0030ff] shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </button>
          )}
          {isDropdownVisible && (
            <>
              <button
                id="closeMenuBtn"
                aria-label="Close menu"
                className="rounded-xl bg-[#ff914d]/[.8] p-2 text-[#0030ff] shadow-lg"
                onClick={() => setDropdownVisible(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Dropdown
                items={menu}
                handleDropdownVisible={setDropdownVisible}
              />
            </>
          )}
        </div>
      </li>
    </ul>
  );
}

export default Navbar;
