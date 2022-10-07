import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader';

import { useFetchInfo } from 'hooks';
import { fetchDataById } from 'services/api';

export const MovieCard = () => {
  const { id } = useParams();
  const { movieInfo, isLoading } = useFetchInfo(id, fetchDataById);

  const { poster_path, title, overview, vote_average, genres } = movieInfo;

  return isLoading && movieInfo !== {} ? (
    <Loader />
  ) : (
    <div>
      <img
        src={`https://www.themoviedb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <div>
        <h2>{title}</h2>
        <h3>User Score</h3>
        <p>{vote_average.toFixed(1)}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(({ name }) => name).join(', ')}</p>
      </div>
      <div>
        <h3>Additional info</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="review">Review</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
