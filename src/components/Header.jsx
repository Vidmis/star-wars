import { useState } from "react";

const Header = ({ films, setIsPeople }) => {
  return (
    <>
      <div className='flex overflow-x-scroll h-56'>
        <ul className='flex flex-nowrap lg:ml-40 md:ml-20 ml-10 mt-14'>
          {films.results?.map((film) => (
            <li key={film.episode_id} className='w-80 h-32 inline-block px-3'>
              <div className='w-64 h-32 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out grid grid-cols-4'>
                <div className='card-inner-content col-span-3 items-left pt-2'>
                  <h3 className='text-sm font-bold mt-2'>{film.title}</h3>
                  <p className='text-sm font-light'>{film.release_date}</p>
                  <button
                    onClick={() => setIsPeople(film.characters)}
                    className='btn btn-blue mt-4'
                  >
                    Show People
                  </button>
                </div>
                <div className='w-14 h-14 col-span-1 text-white text-center mt-4'>
                  <p className='p-2 bg-gray-400 rounded-md'>
                    Ep: {film.episode_id}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
