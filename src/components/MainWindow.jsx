import { useEffect, useState } from "react";

const MainWindow = ({ isPeople, isMainLoading, setIsMainLoading }) => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    if (isPeople) {
      Promise.all(
        isPeople.map((characterUrl) => {
          return fetch(characterUrl).then((res) => {
            if (!res.ok) {
              throw Error("Could not fetch the data for that resource");
            }
            return res.json();
          });
        })
      ).then((data) => {
        setCharacters(data);
        setIsMainLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPeople]);

  return (
    <>
      {isMainLoading && (
        <div className='text-4xl pt-6 font-bold bg-gray-700 bg-opacity-80 h-screen'>Loading...</div>
      )}
      {!isMainLoading && (
        <div className='mainWindow-content bg-gray-700 bg-opacity-60'>
          <h4 className='text-md md:text-xl font-bold py-4 bg-gray-900'>
            People in Film Title:
          </h4>
          <div className='py-6 grid grid-cols-4 bg-palette-jupiter bg-opacity-60'>
            <span className='text-base md:text-xl font-medium'>Name</span>
            <span className='text-base md:text-xl font-medium'>Birth year</span>
            <span className='text-base md:text-xl font-medium'>Gender</span>
            <span className='text-base md:text-xl font-medium'>Mass</span>
          </div>
          <ul>
            {/* Showing the list of characters when button "Show Characters" is clicked in "Header" component card */}
            {characters?.map((character, index) => (
              <li
                key={index}
                className={`py-4 grid grid-cols-4 text-xs md:text-base ${
                  index % 2 === 0 ? "bg-palette-jupiter bg-opacity-30" : ""
                }`}
              >
                <div>
                  {index + 1}. {character.name}
                </div>
                <div>{character.birth_year}</div>
                <div>{character.gender}</div>
                <div>{character.mass}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MainWindow;
