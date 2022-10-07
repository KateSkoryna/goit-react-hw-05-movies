import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SeachForm from 'components/SearchForm';
import Gallery from 'components/Gallery';
import { fetchSearchData } from 'services/api';
import Loader from 'components/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const MovieDataPage = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState(() => {
    return JSON.parse(window.localStorage.getItem('movies')) ?? [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    if (!value) {
      return;
    }
    const findMovies = async () => {
      try {
        setIsLoading(true);
        const moviesList = await fetchSearchData(value);
        moviesList.length === 0
          ? Notify.failure(
              'Sorry! There is no photo with this name. Try something else!'
            )
          : setMovies(movies => [...movies, ...moviesList]);
      } catch (error) {
        console.log(error);
      } finally {
        setSearchParams({ query: value });
        setIsLoading(false);
      }
    };

    findMovies();
  }, [value, setSearchParams]);

  const addValue = ({ inputValue }) => {
    if (inputValue !== value) {
      setValue(inputValue);
      setMovies([]);
    } else {
      setValue(inputValue);
    }
  };

  return (
    <section>
      <SeachForm onSubmit={addValue} />
      {isLoading && searchParams ? <Loader /> : <Gallery movies={movies} />}
    </section>
  );
};
