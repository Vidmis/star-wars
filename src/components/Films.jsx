import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Header from "./Header";
import MainWindow from "./MainWindow";

const Films = () => {
  const { data: films, isLoading, error } = useFetch("https://swapi.dev/api/films");
  const [isPeople, setIsPeople] = useState(null);
  const [isMainLoading, setIsMainLoading] = useState(true);

  return (
    <>
      {error && <div className='text-4xl mt-6 font-bold'>{error}</div>}
      {isLoading && <div className='text-4xl pt-20 font-bold bg-gray-700 bg-opacity-60 h-screen'>Loading...</div>}
      {films && (
        <div className='h-screen overflow-y-auto'>
          <Header films={films} setIsPeople={setIsPeople} setIsMainLoading={setIsMainLoading} />
          {isPeople && <MainWindow films={films} isPeople={isPeople} isMainLoading={isMainLoading} setIsMainLoading={setIsMainLoading} />}
        </div>
      )}
    </>
  );
};

export default Films;
