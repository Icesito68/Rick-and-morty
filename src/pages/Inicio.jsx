import Characters from "../components/Characters.jsx";
import { useState, useEffect,  } from 'react';
import useFetch from "../components/useFetch.jsx";

export default function Inicio() {
    const [characters, setCharacters] = useState(null);

    const {data, loading, error} = useFetch('https://rickandmortyapi.com/api/character');
  
    useEffect(() => {
      if(!loading && !error){
        setCharacters(data.results);
      }
    }, [data]);
    
    console.log(characters);
    return(
        <div>
        <header className='App-header'>
          <h1 className="title"> Rick & Morty </h1>
          {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} ></Characters>
          ) : (
            <>
            {/* <img src={imageRickyAndMorty} alt="Rick & Morty" className="img-home"/> */}
            <button className="btn-search">Buscar personajes</button>
            </>
          )}
        </header>        </div>
    )
}