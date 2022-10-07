import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import MovieCardBox from 'components/MovieCardBox';
import Loader from 'components/Loader';
import { useFetchInfo } from 'hooks';
import { fetchDataById } from 'services/api';

export const MovieCard = () => {
  const { id } = useParams();
  const { movieInfo, isLoading } = useFetchInfo(id, fetchDataById);
  const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/home';

  console.log(location.state);

  return isLoading && movieInfo !== {} ? (
    <Loader />
  ) : (
    <>
      <Link to={location.state?.from}>Go Back</Link>
      <MovieCardBox movie={movieInfo} />
      <Outlet />
    </>
  );
};
