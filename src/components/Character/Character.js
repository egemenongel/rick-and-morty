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
        <h3>{character.name}</h3>
        <h3>{character.species}</h3>
        <h3>{character.gender}</h3>
        <h3>{character.status}</h3>
        <h3>{character.episode.length} episodes</h3>
        <h3>Current Location: {character.location.name}</h3>
      </div>
    </div>
   );
}
 
export default Character;