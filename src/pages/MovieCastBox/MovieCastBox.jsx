import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import { useFetchInfo } from 'hooks';
import { fetchDataByCast } from 'services/api';
import MovieCastContainer from 'components/MovieCastContainer';
import { CastList, CastItem } from './MovieCastBox.stuled';

const MovieCastBox = () => {
  const { id } = useParams();
  const { movieInfo, isLoading } = useFetchInfo(id, fetchDataByCast);

  const { cast } = movieInfo;

  return isLoading && movieInfo !== {} ? (
    <Loader />
  ) : (
    <CastList>
      {cast
        .map(({ id, ...restProps }) => (
          <CastItem key={id}>
            <MovieCastContainer {...restProps} />
          </CastItem>
        ))
        .filter((item, index) => index <= 8)}
    </CastList>
  );
};

export default MovieCastBox;
