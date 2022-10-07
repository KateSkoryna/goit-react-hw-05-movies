import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchDataById } from 'services/api';
import Loader from 'components/Loader';

export const MovieCard = () => {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const findMovieInfo = async () => {
      try {
        setIsLoading(true);
        const movieInfo = await fetchDataById(id);
        console.log(movieInfo);
        setMovie(movieInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findMovieInfo();
  }, [id]);

  const { poster_path, title, overview, vote_average } = movie;

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <img
        src={`https://www.themoviedb.org/t/p/w500${poster_path}`}
        alt={`${title}`}
      />
      <div>
        <h2>{`${title}`}</h2>
        <p>{`${vote_average}`}</p>
        <h3>Overview</h3>
        <p>{`${overview}`}</p>
      </div>
      <div>
        <h3>Additional info</h3>
        <Outlet />
      </div>
    </div>
  );
};
