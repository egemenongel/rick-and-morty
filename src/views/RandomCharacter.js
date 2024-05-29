import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Character from "../components/Character/Character";
import useFetch from "../hooks/useFetch";


const RandomCharacter = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  function generateRandomNumber(min = 1, max = 826) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(()=>{
    setRandomNumber(generateRandomNumber());
  },[])

  const url = `https://rickandmortyapi.com/api/character/${randomNumber}`
  const {data: character, error, isLoading} = useFetch(url)

  return (
  <div className="random">
      <ClipLoader
        color={"#01afc4"}
       loading={isLoading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {error && <div>{error}</div>}
      {character && <Character character = {character}/>}
  </div>);
}
 
export default RandomCharacter;