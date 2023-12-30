/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const DropdownMenu = ({ items, handleDropdownVisible }) => {
  return (
    <div className="absolute -start-8 right-6 top-12 z-[1] ">
      <ul className="grid w-[240%] gap-3 rounded-xl bg-[#ff914d]/[.8] py-3">
        {items.map((item) => (
          <li
            key={item}
            className="mx-auto rounded-xl bg-[#0030ff]/[.8] px-3 py-1 font-semibold shadow-lg"
            onClick={() => handleDropdownVisible((viz) => !viz)}
          >
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
