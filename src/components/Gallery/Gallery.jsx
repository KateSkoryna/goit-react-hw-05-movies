import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Gallery = ({ movies }) => {
  console.log(movies);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink>{movie.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

Gallery.propTypes = PropTypes.arrayOf(PropTypes.shape).isRequired;

export default Gallery;
