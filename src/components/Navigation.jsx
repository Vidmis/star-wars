import { useState } from "react";
import { Link } from "react-router-dom";
import { pathnames } from "../constants/location";

const Navigation = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  // Show menu on click
  const toggleMenu = () => {
    if (isMenuShow) {
      setIsMenuShow(false);
      console.log("menu shows");
    } else {
      setIsMenuShow(true);
    }
  };

  return (
    <>
      {isMenuShow && (
        <nav
          className={`nav-content pt-24 pr-10 h-full w-32 bg-palette-space absolute`}
        >
          <ul className='text-left'>
            <li className='ml-5' onClick={() => setIsMenuShow(false)}>
              <Link to={pathnames.about}>About</Link>
            </li>
            <li className='ml-5' onClick={() => setIsMenuShow(false)}>
              <Link to={pathnames.films}>Films</Link>
            </li>
          </ul>
        </nav>
      )}

      <div
        className='py-2 px-5 rounded-lg absolute top-2 left-4 cursor-pointer bg-palette-sky-300 text-white bg-opacity-100'
        onClick={toggleMenu}
      >
        Menu
      </div>
    </>
  );
};

export default Navigation;
