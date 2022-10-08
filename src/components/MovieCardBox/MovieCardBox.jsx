import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MovieCardBox = ({
  movie: { poster_path, title, vote_average, overview, genres },
}) => {
  return (
    <>
      <img
        src={`https://www.themoviedb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <div>
        <h2>{title}</h2>
        <h3>User Score</h3>
        <p>{vote_average.toFixed(1)}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(({ name }) => name).join(', ')}</p>
      </div>
      <div>
        <h3>Additional info</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="review">Review</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

MovieCardBox.propTypes = PropTypes.shape({
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape),
});
export default MovieCardBox;
