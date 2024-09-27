import { Link } from 'react-router-dom';

const DropdownMenu = ({ items, handleDropdownVisible }) => {
  return (
    <div className="absolute -left-8 right-6 top-12 z-10">
      <ul className="grid w-[240%] gap-3 rounded-lg bg-white/90 p-3 shadow-lg">
        {items.map((item) => (
          <li
            key={item}
            className="mx-auto w-full rounded-full bg-green-300 px-4 py-2 font-semibold text-gray-800 transition duration-300 hover:bg-green-400"
            onClick={() => handleDropdownVisible((visible) => !visible)}
          >
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
