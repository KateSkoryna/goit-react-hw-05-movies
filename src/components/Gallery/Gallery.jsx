import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieList, MovieItem, Link } from './Gallery.styled';

const Gallery = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieList>
      {movies.map(({ id, title }) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </MovieItem>
      ))}
    </MovieList>
  );
};

Gallery.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
  })
).isRequired;

export default Gallery;
