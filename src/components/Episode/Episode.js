import CharacterAvatar from '../../components/CharacterAvatar/CharacterAvatar';
import './Episode.css';

const Episode = (props) => {
  const { episode, characters } = props;

  return (  
    <div className="episode">
      <h1>{episode.name}</h1>
      <div class="metadata">
            <span><strong>Episode:</strong> {episode.episode}</span>
            <span><strong>Air Date:</strong> {episode.air_date}</span>
      </div>
      <div className="characters">
        <h2>Characters</h2>
      </div>
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
