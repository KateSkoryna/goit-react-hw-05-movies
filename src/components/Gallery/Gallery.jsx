import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Gallery = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

Gallery.propTypes = PropTypes.arrayOf(PropTypes.shape).isRequired;

export default Gallery;
