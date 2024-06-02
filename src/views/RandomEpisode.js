import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Episode from "../components/Episode/Episode";
import useFetch from "../hooks/useFetch";

const RandomEpisode = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber())
  const url = `https://rickandmortyapi.com/api/episode/${randomNumber}`
  const {data: episode, error, isLoading} = useFetch(url)
  const [characters, setCharacters] = useState([])

  function generateRandomNumber(min = 1, max = 51) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  useEffect(() =>{
    if(episode){
      const fetchCharacters = async () => {
        const characterData = await Promise.all(
          episode.characters.map(url => fetchCharData(url))
        );
        setCharacters(characterData);
      };

      fetchCharacters()
    }
  },[episode])

  const fetchCharData = async(element)=>{
    try {
      const response = await fetch(element)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching dependent data:', error)
      return null
    }
  }
  //TODO: Character List Below
  return ( 
   <>
    <ClipLoader
        color={"#01afc4"}
       loading={isLoading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {error && <div>{error}</div>}
      {episode && <Episode episode = {episode} characters = {characters}/>}
   </>
   );
}
 
export default RandomEpisode;