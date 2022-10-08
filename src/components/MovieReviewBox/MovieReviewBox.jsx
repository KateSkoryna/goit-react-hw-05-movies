import { useParams } from 'react-router-dom';
import { fetchDataByReviews } from 'services/api';
import Loader from 'components/Loader';
import { useFetchInfo } from 'hooks';
import MovieReviewContainer from 'components/MovieReviewContainer';

const MovieReviewBox = () => {
  const { id } = useParams();
  const { movieInfo, isLoading } = useFetchInfo(id, fetchDataByReviews);

  const { results } = movieInfo;

  return isLoading && movieInfo !== {} ? (
    <Loader />
  ) : results.length === 0 ? (
    <p>Нет отзывов</p>
  ) : (
    <ul>
      {results
        .map(({ id, ...restProps }) => (
          <li key={id}>
            <MovieReviewContainer {...restProps} />
          </li>
        ))
        .filter((item, index) => index <= 8)}
    </ul>
  );
};

export default MovieReviewBox;
