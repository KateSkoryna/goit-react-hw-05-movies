import React, { useState, useEffect } from 'react';
import Gallery from 'components/Gallery';
import Loader from 'components/Loader';
import { fetchTrendData } from 'services/api';

const useFetchItems = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const findTrendFilms = async () => {
      try {
        setIsLoading(true);
        const moviesList = await fetchTrendData();
        setMovies(movies => [...movies, ...moviesList]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findTrendFilms();
  }, []);

  return { movies, isLoading };
};

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
