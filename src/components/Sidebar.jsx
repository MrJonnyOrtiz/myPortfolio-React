/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
// import logo from '/JOlogoNoText.jpg';
import headshot from '../assets/headshot.smallerSize.webp';
import reactLogo from '../assets/react.svg';
import awsLogo from '../assets/amazonaws.svg';

function Sidebar({ menu }) {
  return (
    <ul className="hidden gap-8 rounded-xl py-3 text-center shadow-2xl sm:block">
      <li>
        <Link to="/">
          {/* <div>
          <img
            className="mx-auto rounded-full"
            src={logo}
            alt="Jonny Ortiz personal website logo"
            width="150px"
            height="150px"
          />
        </div> */}
          <div>
            <img
              className="mx-auto my-3 rounded-lg"
              src={headshot}
              alt="Jonny Ortiz head shot"
              width="150px"
              height="150px"
            />
          </div>
          <h1 className="my-3 text-xl font-bold">Jonny Ortiz</h1>
        </Link>
      </li>

      <li>
        <div className="mb-7">
          <ul className="grid gap-3 px-3 font-semibold">
            <li>Fullstack Developer</li>
            <li className="mx-auto grid  w-fit rounded-lg bg-white px-2 text-black">
              <img
                src={reactLogo}
                alt="React logo"
                width="50px"
                height="50px"
                className="mx-auto"
              />
              <p className="">React</p>
            </li>
            <li className="mx-auto w-fit  rounded-lg bg-white px-2">
              <img src={awsLogo} alt="AWS logo" width="50px" height="50px" />
            </li>
          </ul>
        </div>
      </li>

      <li>
        <div className="my-7">
          <ul className="grid gap-3 rounded-xl bg-[#ff914d]/[.6] p-3 font-semibold shadow-lg">
            {menu.map((item) => (
              <Link to={item.toLowerCase()} key={item}>
                <li className="hover:text-gray-70 mx-auto w-[75%] rounded-3xl bg-[#0030ff] p-3  shadow-xl hover:bg-white hover:text-black">
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </li>

      <li>
        <div className="mx-auto w-1/4  rounded-xl">
          <a
            href="https://www.linkedin.com/in/jonny-ortiz/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </li>
    </ul>
  );
}

export default Sidebar;
