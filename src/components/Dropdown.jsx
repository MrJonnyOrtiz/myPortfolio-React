import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const DropdownMenu = ({ items, handleDropdownVisible }) => {
  return (
    <div className="absolute -left-8 right-6 top-12 z-50">
      <ul className="grid w-[240%] gap-3 rounded-lg bg-white/90 p-3 shadow-lg">
        {items.map((item) => (
          <li
            key={item}
            className="mx-auto w-full rounded-full bg-blue-500 px-4 py-2 font-semibold text-white shadow-sm transition duration-300 hover:bg-blue-600 hover:shadow-xl"
            onClick={() => handleDropdownVisible((visible) => !visible)}
          >
            <Link
              to={`/${item.toLowerCase()}`}
              className="block w-full text-center"
              aria-label={`Go to ${item}`}
              title={`Go to ${item}`}
              onClick={() => {
                window.fathom.trackEvent(
                  `SIDEBAR_NAV_${item
                    .replace(/[^a-zA-Z0-9_]/g, '')
                    .toUpperCase()}`,
                );
                console.log(
                  `Fathom Event Tracked: SIDEBAR_NAV_${item
                    .replace(/[^a-zA-Z0-9_]/g, '')
                    .toUpperCase()}`,
                ); // For debugging
              }}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;

DropdownMenu.propTypes = {
  items: PropTypes.array.isRequired,
  handleDropdownVisible: PropTypes.func.isRequired,
};
