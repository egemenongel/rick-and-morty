import CharacterAvatar from '../../components/CharacterAvatar/CharacterAvatar';
import './Episode.css';

const Episode = (props) => {
  const { episode, characters } = props;

  return (  
    <div className="episode">
      <h1>Name: {episode.name}</h1>
      <h1>Episode: {episode.episode}</h1>
      <h1>Air Date: {episode.air_date}</h1>
      <h1>Characters:</h1>
      {characters.length > 0 && (
        <div className="characterList">
          {characters.map((character) => (
            <CharacterAvatar key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Episode;
