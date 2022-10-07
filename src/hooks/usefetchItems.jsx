import { fetchTrendData } from 'services/api';
import { useState, useEffect } from 'react';

export const useFetchItems = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const findTrendFilms = async () => {
      try {
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
