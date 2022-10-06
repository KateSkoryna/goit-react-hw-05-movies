import React, { useState, useEffect } from 'react';
import Gallery from 'components/Gallery';
import Loader from 'components/Loader';
import { fetchTrendData } from 'services/api';
import Button from 'components/Button';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (page === 1 && movies.length !== 0) {
      return;
    }
    const findTrendFilms = async () => {
      try {
        setIsLoading(true);
        const moviesList = await fetchTrendData(page);
        setMovies(movies => [...movies, ...moviesList]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findTrendFilms();
  }, [movies, page]);

  return (
    <section>
      <h2>Trandy Today</h2>
      {isLoading && movies.length === 0 ? (
        <Loader />
      ) : (
        <Gallery movies={movies} />
      )}
      {movies.length % 20 === 0 && movies.length !== 0 ? (
        <Button onClick={() => setPage(() => page + 1)} />
      ) : (
        ''
      )}
    </section>
  );
};

export default Home;
