import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchDataById } from 'services/api';
import Loader from 'components/Loader';

export const MovieCard = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const findMovieInfo = async () => {
      try {
        const movieInfo = await fetchDataById(id);
        console.log();
        setMovie(movieInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findMovieInfo();
  }, [id]);

  const { poster_path, title, overview, vote_average, genres } = movie;

  return isLoading && movie !== {} ? (
    <Loader />
  ) : (
    <div>
      <img
        src={`https://www.themoviedb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <div>
        <h2>{title}</h2>
        <h3>User Score</h3>
        <p>{vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(({ name }) => name).join(', ')}</p>
      </div>
      <div>
        <h3>Additional info</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="review">Review</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
