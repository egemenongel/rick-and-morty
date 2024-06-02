import CharacterAvatar from '../../components/CharacterAvatar/CharacterAvatar';
import './Episode.css';

const Episode = (props) => {
  const episode = props.episode
  const characters = props.characters
  
  return (  
    <div className="episode">
    <h1>Name: {episode.name}</h1>
    <h1>Episode: {episode.episode}</h1>
    <h1>Air Date: {episode.air_date}</h1>
    <h1>Characters:</h1>
    {characters.length > 0 && (
          <div>
            <ul>
              {characters.map((character) => (
                <CharacterAvatar character = {character} />
              ))}
            </ul>
          </div>
        )}
    </div>
  )
}
 
export default Episode;