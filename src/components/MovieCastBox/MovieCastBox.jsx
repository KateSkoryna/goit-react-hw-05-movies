// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import { useFetchInfo } from 'hooks';
import { fetchDataByCast } from 'services/api';
import MovieCastContainer from 'components/MovieCastContainer';

const MovieCastBox = () => {
  const { id } = useParams();
  const { movieInfo, isLoading } = useFetchInfo(id, fetchDataByCast);

  const { cast } = movieInfo;
  console.log(cast);

  return isLoading && movieInfo !== {} ? (
    <Loader />
  ) : (
    <ul>
      {cast
        .map(({ id, ...restProps }) => (
          <li key={id}>
            <MovieCastContainer {...restProps} />
          </li>
        ))
        .filter((item, index) => index <= 8)}
    </ul>
  );
};

export default MovieCastBox;
