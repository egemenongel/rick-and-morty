import CircularImage from "../CircularImage/CircularImage";
import './Character.css';

const Character = (props) => {
  const character = props.character
  
  return ( 
    <div className="character">
      <div className="avatar">
        <CircularImage src={character.image} alt="Character Image" />
      </div>
      <div className="characterDetails">
        <h2>{character.name}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.status}</h2>
        <h2>{character.episode.length} episodes</h2>
        <h2>Current Location: {character.location.name}</h2>
      </div>
    </div>
   );
}
 
export default Character;