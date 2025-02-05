import './App.css';     
import { Movies } from './components/Movies';
import { useMovies } from "./hooks/useMovies";
import { useState, useEffect, useRef, useCallback } from 'react';
import debounce from "just-debounce-it";


function useSearch(){
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);


  useEffect(() => {

    if(isFirstInput.current){
      isFirstInput.current = search == "";
      return
    }

    if(search == ''){
      setError('No se puede buscar una pelicula vacia');
      return
    }
    if(search.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un número');
      return
    }
    if(search.length < 3){
      setError('La busqueda debe tener al menos 3 caracteres');
      return
    }

    setError(null)
  }, [search]);

  return{search, updateSearch, error}
}

function App() {
  const [sort, setSort] = useState(false);
  const {search, updateSearch, error} = useSearch();
  const {movies, getMovies,loading} = useMovies({search,sort});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('Search',search);
      getMovies({search});
    }, 300),
    [getMovies]
  )

  const handleSubmit = (e) =>{
    e.preventDefault();
    getMovies({search});
  }

  const handleChange = (e) =>{
    const newSearch = e.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
    //Validacion
  }

  const handleSort = () => {
    setSort(!sort);
  }
  
  return (
    <div className='page'>
      <header>
      <h1>BUSCADOR DE PELICULAS</h1>
        <form action="POST" className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='search' type="text" placeholder='Avengers, Jhon Wick, Marvel...'/>
          <input type="checkbox" onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: "red"}}>{error}</p>}
      </header>
      <main>
        {loading ? 
          <p>Cargando...</p>
          : 
          <Movies movies={movies}></Movies> }
      </main>
    </div>
  )
}

export default App
