import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Gallery = ({ movies }) => {
  console.log(movies);
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

Gallery.propTypes = PropTypes.arrayOf(PropTypes.shape).isRequired;

export default Gallery;
