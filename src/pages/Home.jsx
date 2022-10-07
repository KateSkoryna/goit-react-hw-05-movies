import Gallery from 'components/Gallery';
import Loader from 'components/Loader';
import { useFetchItems } from 'hooks';

export const Home = () => {
  const { movies, isLoading } = useFetchItems();
  return (
    <section>
      <h2>Trandy Today</h2>
      {isLoading && movies.length === 0 ? (
        <Loader />
      ) : (
        <Gallery movies={movies} />
      )}
    </section>
  );
};
