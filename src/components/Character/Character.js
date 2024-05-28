import CircularImage from "../CircularImage/CircularImage";
import './Character.css';

const Character = (props) => {
  const character = props.character
  
  return ( 
    <div className="character">
      <CircularImage src={character.image} alt="Character Image" />
      <div className="character-details">
        <h2>{character.name}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.status}</h2>
      </div>
    </div>
   );
}
 
export default Character;