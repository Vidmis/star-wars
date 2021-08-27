import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const MainWindow = ({ isPeople }) => {
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
      ).then((data) => setCharacters(data));
    }
  }, [isPeople]);

  return (
    <>
      {!characters && <div className='text-4xl mt-6 font-bold'>Loading...</div>}
      {characters && isPeople && (
        <div className='mainWindow-content bg-gray-200'>
          <h4 className='text-xl font-light pt-8 mb-5'>
            People in Film Title:
          </h4>
          <div className='h-24 grid grid-cols-4'>
            <span className='text-xl font-medium'>Name</span>
            <span className='text-xl font-medium'>Birth year</span>
            <span className='text-xl font-medium'>Gender</span>
            <span className='text-xl font-medium'>Mass</span>
          </div>
          <ul className=''>
            {characters?.map((character, index) => (
              <li key={index} className='h-10 grid grid-cols-4'>
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
