import { Link } from "react-router-dom";
import { pathnames } from "../constants/location";

const Navigation = () => {
  return (
    <>
      <nav className='nav-content col-span-3 p-2 mt-10'>
        <div className='p-4 text-left'>Navigation:</div>
        <ul className='border-2'>
          <li>
            <Link to={pathnames.about}>About</Link>
          </li>
          <li>
            <Link to={pathnames.films}>Films</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
