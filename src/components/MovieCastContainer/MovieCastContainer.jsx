import PropTypes from 'prop-types';

const MovieCastContainer = ({ name, character, profile_path }) => {
  return (
    <>
      <img
        src={`https://www.themoviedb.org/t/p/w500${profile_path}`}
        alt={character}
      />
      <ul>
        <li>
          <h4>Name</h4>
          <p>{name}</p>
        </li>
        <li>
          <h4>Character</h4>
          <p>{character}</p>
        </li>
      </ul>
    </>
  );
};

MovieCastContainer.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string.isRequired,
});

export default MovieCastContainer;
