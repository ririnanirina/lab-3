// Import the Card component from react-bootstrap to structure the movie item display
import Card from 'react-bootstrap/Card';

// MovieItem component receives 'props' to display individual movie details
function MovieItem(props) {
  // useEffect(() => {
  //   console.log("Movie Item:", props.mymovie);
  // }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  return (
    <div>
      <Card>
        <Card.Header>{props.mymovie.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mymovie.Poster} alt={props.mymovie.Title} />
            <footer>{props.mymovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

// Export the MovieItem component so it can be imported and used in other files
export default MovieItem;

