export default function Characters(props) {
  const {characters, setCharacters} = props;

  const resetCharacters = () => {
    setCharacters(null);
  }

  return (
    <div className="characters">
      <h1>Character</h1>
      <span className="back-home" onClick={resetCharacters} >Volver a home</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                  {character.status === "Alive" ? (
                    <>
                      <span className="alive">Alive</span>
                    </>
                  ) : (
                    <>
                      <span className="dead">Dead</span>
                    </>
                  )}
              </h6>

              <p>
                  <span className="text-grey">Episodios</span>
                  <span>{character.episode.length}</span>
              </p>
            </div>
          </div>
      ))}

      </div>
    </div>
  );
}
