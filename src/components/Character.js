

const Character = (props) => {
  const character = props.character
  
  return ( 
    <div className="character">
      <img src={character.image} alt="" />
      <h2>{character.name}</h2>
    </div>
   );
}
 
export default Character;