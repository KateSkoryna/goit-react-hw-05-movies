import SeachForm from 'components/SearchForm';
import Gallery from 'components/Gallery';
import Loader from 'components/Loader';
import { useFetchQuery } from 'hooks';

const MovieDataPage = () => {
  const { isLoading, movies, searchParams, addValue } = useFetchQuery();

  return (
    <section>
      <SeachForm onSubmit={addValue} />
      {isLoading && searchParams ? <Loader /> : <Gallery movies={movies} />}
    </section>
  );
};

export default MovieDataPage;
