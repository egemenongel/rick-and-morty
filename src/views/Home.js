import { useEffect, useState } from "react";
import Character from "../components/Character";
import useFetch from "../hooks/useFetch";

const Home = () => {
const {data: charactersData, isLoading, error} = useFetch('https://rickandmortyapi.com/api/character')
const [characters, setCharacters] = useState([])

useEffect(()=>{
  if(charactersData && charactersData.results){
    setCharacters(charactersData.results)
  }
},[charactersData])

return (
  <div className="a">
    <div className="characters">
      {error && <div className="error">ERROR HAPPENED: {error}</div>}
      {isLoading && <div className="loading">Loading...</div>}
      {!isLoading && characters.length > 0 && characters.map((character) => (
        <Character character = {character} key = {character.id}/>
      ))}
    </div>
  </div>
);

  
}
 

export default Home;