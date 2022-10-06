import React, { useState, useEffect } from 'react';
import SeachForm from 'components/SearchForm';
import Gallery from 'components/Gallery';
import { fetchSearchData } from 'services/api';
import Loader from 'components/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Button from 'components/Button';

const MovieDataPage = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!value) {
      return;
    }
    const findMovies = async () => {
      try {
        setIsLoading(true);
        const moviesList = await fetchSearchData(value, page);
        moviesList.length === 0
          ? Notify.failure(
              'Sorry! There is no photo with this name. Try something else!'
            )
          : setMovies(movies => [...movies, ...moviesList]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    findMovies();
  }, [value, page]);

  const addValue = ({ inputValue }) => {
    if (inputValue !== value) {
      setValue(inputValue);
      setMovies([]);
      setPage(1);
    } else {
      setValue(inputValue);
    }
  };

  return (
    <section>
      <SeachForm onSubmit={addValue} />
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

export default MovieDataPage;
