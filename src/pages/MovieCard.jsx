import { useParams, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import MovieCardBox from 'components/MovieCardBox';
import Loader from 'components/Loader';
import { useFetchInfo } from 'hooks';
import { fetchDataById } from 'services/api';

const MovieCard = () => {
  const { id } = useParams();
  const { movieInfo, isLoading } = useFetchInfo(id, fetchDataById);

  return isLoading && movieInfo !== {} ? (
    <Loader />
  ) : (
    <>
      <MovieCardBox movie={movieInfo} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieCard;
