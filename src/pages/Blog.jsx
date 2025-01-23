import useFetch from "../components/useFetch.jsx";
import {useParams, useSearchParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

export function Blog() {
    const { data, loading, error } = useFetch(`https://rickandmortyapi.com/api/character/`);
  
    let [searchParams, setSearchParams] = useSearchParams('');
  
    const handleChange = (e) => {
      setSearchParams({ [e.target.name]: e.target.value, alejandro:"hola" });
    };
  
    if (loading) return <h1>Cargando...</h1>;
    if (error) return <h1>Ha ocurrido un error</h1>;
    return (
      <div>
        <h1>Blog - ELige tu personaje favorito</h1>
        <input
          type="text"
          name="filter"
          onChange={handleChange}
          className="form-comtrol my-3"
          alt="Buscador"
          value={searchParams.get("filter") || ""}
        />
  
        <ul>
          {searchParams.get("filter") ? (
            data.results
              .filter((item) =>
                item.name.toLowerCase().includes(searchParams.get("filter").toLowerCase())
              )
              .map((item) => (
                <Link className="list-group-item" key={item.id} to={`/blog/${item.id}`}>
                  {item.name}
                </Link>
              ))
          ) : (
            data.results.map((item) => (
              <Link className="list-group-item" key={item.id} to={`/blog/${item.id}`}>
                {item.name}
              </Link>
            ))
          )}
        </ul>
      </div>
    );
  }

export function BlogCharacter(){
    const params = useParams();
    const url = `https://rickandmortyapi.com/api/character/${params.id}`;
    const {data, loading, error} = useFetch(url);

    if (loading) return <h1>Buscando en el multiverso...</h1>
    if (error) return <h1>Este personaje ya no existe</h1>

    return(
        <div>
            <img src={data.image} className="card-img-top" alt={data.name}/>
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.species}</p>                
            </div>
        </div>
    )
}