const Header = ({ films, setIsPeople, setIsMainLoading }) => {
  return (
    <>
      <div className='flex overflow-x-scroll h-56 bg-gray-700 bg-opacity-60'>
        <ul className='flex flex-nowrap md:ml-20 ml-1 mt-14'>
          {/* Show cards with movie info */}
          {films.results?.map((film) => (
            <li key={film.episode_id} className='w-80 h-32 inline-block px-3 '>
              <div className='w-64 h-32 bg-gray-900 max-w-xs overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out grid grid-cols-4 hover:shadow-xl'>
                <div className='card-inner-content col-span-3 items-left pt-2'>
                  <h3 className='text-sm font-bold mt-2'>{film.title}</h3>
                  <p className='text-sm font-light'>{film.release_date}</p>
                  <button
                    onClick={() => {
                      setIsPeople(film.characters);
                      setIsMainLoading(true);
                    }}
                    className='btn btn-sky mt-4 '
                  >
                    Show Characters
                  </button>
                </div>
                <div className='w-14 h-14 col-span-1 text-gray-900 text-center mt-4'>
                  <p className='p-2 bg-palette-jupiter rounded-md'>
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
