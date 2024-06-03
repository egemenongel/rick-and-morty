import CircularImage from "../CircularImage/CircularImage";
import './CharacterAvatar.css';

const CharacterAvatar = (props) => {
  const { character } = props;

  return (
    <div className="characterItem">
      <CircularImage src={character.image} alt="Character Image" />
      <div className="characterName">
        <h3>{character.name}</h3>
      </div>
    </div>
  );
}

export default CharacterAvatar;
