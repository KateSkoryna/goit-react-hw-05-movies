import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  GoBackLink,
  MovieBox,
  MovieImg,
  MovieDescriptionBox,
  MovieInfo,
  FeatureLink,
  MovieTitle,
  MovieInfoTitle,
  MovieInfoText,
} from './MovieCardBox.styled';

const MovieCardBox = ({
  movie: { poster_path, title, vote_average, overview, genres },
}) => {
  const location = useLocation();

  return (
    <MovieBox>
      <GoBackLink to={location.state?.from ?? '/movies'}>Go Back</GoBackLink>
      <MovieDescriptionBox>
        <MovieImg
          src={`https://www.themoviedb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <MovieInfo>
          <MovieTitle>{title}</MovieTitle>
          <MovieInfoTitle>User Score</MovieInfoTitle>
          <MovieInfoText>{vote_average.toFixed(1)}</MovieInfoText>
          <MovieInfoTitle>Overview</MovieInfoTitle>
          <MovieInfoText>{overview}</MovieInfoText>
          <MovieInfoTitle>Genres</MovieInfoTitle>
          <MovieInfoText>
            {genres.map(({ name }) => name).join(', ')}
          </MovieInfoText>
        </MovieInfo>
      </MovieDescriptionBox>
      <div>
        <MovieInfoTitle>Additional info</MovieInfoTitle>
        <ul>
          <li>
            <FeatureLink to="cast">Cast</FeatureLink>
          </li>
          <li>
            <FeatureLink to="review">Review</FeatureLink>
          </li>
        </ul>
      </div>
    </MovieBox>
  );
};

MovieCardBox.propTypes = PropTypes.shape({
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape),
});
export default MovieCardBox;
