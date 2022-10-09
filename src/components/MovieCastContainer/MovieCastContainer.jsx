import PropTypes from 'prop-types';
import {
  CastInfoList,
  CastInfoItem,
  CastImg,
  CastInfoTitle,
  CastInfoText,
} from './MovieCastContainer.styled';

const MovieCastContainer = ({ name, character, profile_path }) => {
  return (
    <>
      <CastImg
        src={`https://www.themoviedb.org/t/p/w500${profile_path}`}
        alt={character}
      />
      <CastInfoList>
        <CastInfoItem>
          <CastInfoTitle>Name</CastInfoTitle>
          <CastInfoText>{name}</CastInfoText>
        </CastInfoItem>
        <CastInfoItem>
          <CastInfoTitle>Character</CastInfoTitle>
          <CastInfoText>{character}</CastInfoText>
        </CastInfoItem>
      </CastInfoList>
    </>
  );
};

MovieCastContainer.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string.isRequired,
};

export default MovieCastContainer;
