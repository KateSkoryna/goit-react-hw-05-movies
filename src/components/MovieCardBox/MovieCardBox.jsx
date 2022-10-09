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
  const backLink = location.state?.from ?? '/movies';

  return (
    <MovieBox>
      <GoBackLink to={backLink}>Go Back</GoBackLink>
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
            <FeatureLink to="cast" state={{ from: backLink }}>
              Cast
            </FeatureLink>
          </li>
          <li>
            <FeatureLink to="review" state={{ from: backLink }}>
              Review
            </FeatureLink>
          </li>
        </ul>
      </div>
    </MovieBox>
  );
};

MovieCardBox.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape),
  }),
};
export default MovieCardBox;
