// Import the MovieItem component to display individual movie details
import MovieItem from './MovieItem';

function Movies(props) {
  return props.myMovies.map((movie) => (
    <MovieItem mymovie={movie} key={movie.imdbID} />
  ));
}

export default Movies;