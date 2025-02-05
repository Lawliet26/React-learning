export function RenderMovies({movies}){
    return(
      <ul className="movies">
        {
            movies.map(movie => (
            <li className="movie" key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title} />
            </li>
            ))
        }
    </ul>
    )
  }


export function NoMoviesResult(){
    return (
        <p>No se encontraron películas en esta búsqueda</p>
    );
}

export function Movies({movies}){
    const hasMovies = movies?.length > 0;

    return(
        hasMovies?
        <RenderMovies movies={movies}></RenderMovies>
        :
        <NoMoviesResult></NoMoviesResult>
    )
}
