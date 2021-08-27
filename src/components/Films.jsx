import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Header from "./Header";
import MainWindow from "./MainWindow";

const Films = () => {
  const {
    data: films,
    isLoading,
    error,
  } = useFetch("https://swapi.dev/api/films");
  const [isPeople, setIsPeople] = useState(null);

  return (
    <>
      {error && <div className='text-4xl mt-6 font-bold'>{error}</div>}
      {isLoading && <div className='text-4xl mt-6 font-bold'>Loading...</div>}
      {films && (
        <div className='bg-gray-100 h-screen'>
          <Header films={films} setIsPeople={setIsPeople} />
          {isPeople && <MainWindow films={films} isPeople={isPeople} />}
        </div>
      )}
    </>
  );
};

export default Films;
