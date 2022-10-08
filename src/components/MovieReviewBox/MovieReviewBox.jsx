import { useParams } from 'react-router-dom';
import { fetchDataByReviews } from 'services/api';
import Loader from 'components/Loader';
import { useFetchInfo } from 'hooks';
import MovieReviewContainer from 'components/MovieReviewContainer';
import { NoReviewText, ReviewItem } from './MovieReviewBox.styled';

const MovieReviewBox = () => {
  const { id } = useParams();
  const { movieInfo, isLoading } = useFetchInfo(id, fetchDataByReviews);

  const { results } = movieInfo;

  return isLoading && movieInfo !== {} ? (
    <Loader />
  ) : results.length === 0 ? (
    <NoReviewText>
      Sorry...There is no review yet. You can be the first!
    </NoReviewText>
  ) : (
    <ul>
      {results
        .map(({ id, ...restProps }) => (
          <ReviewItem key={id}>
            <MovieReviewContainer {...restProps} />
          </ReviewItem>
        ))
        .filter((item, index) => index <= 8)}
    </ul>
  );
};

export default MovieReviewBox;
