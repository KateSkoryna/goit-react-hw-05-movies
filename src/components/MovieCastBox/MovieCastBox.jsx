// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import { useFetchInfo } from 'hooks';
import { fetchDataByCast } from 'services/api';

const MovieCastBox = () => {
  const { id } = useParams();
  const { movieInfo, isLoading } = useFetchInfo(id, fetchDataByCast);

  return isLoading && movieInfo !== {} ? (
    <Loader />
  ) : (
    <div>
      <p>Name</p>
      <p>Character</p>
    </div>
  );
};

export default MovieCastBox;
