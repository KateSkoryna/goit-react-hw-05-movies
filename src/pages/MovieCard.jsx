import { useParams, Outlet } from 'react-router-dom';
import MovieCardBox from 'components/MovieCardBox';
import Loader from 'components/Loader';
import { useFetchInfo } from 'hooks';
import { fetchDataById } from 'services/api';

export const MovieCard = () => {
  const { id } = useParams();
  const { movieInfo, isLoading } = useFetchInfo(id, fetchDataById);

  return isLoading && movieInfo !== {} ? (
    <Loader />
  ) : (
    <>
      <MovieCardBox movie={movieInfo} />
      <Outlet />
    </>
  );
};
