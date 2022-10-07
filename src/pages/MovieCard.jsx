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

  const { poster_path, title, overview, vote_average, genres } = movie;
  const genresName = genres.map(genre => genre.name);

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
        <h3>User Score</h3>
        <p>{`${vote_average}`}</p>
        <h3>Overview</h3>
        <p>{`${overview}`}</p>
        <h3>Genres</h3>
        <p>{`${genresName}`}</p>
      </div>
      <div>
        <h3>Additional info</h3>
        <Outlet />
      </div>
    </div>
  );
};

// function getG(arr) {
//   const array = arr.map(el => el.name);
//   if (array.length <= 2) {
//     return array;
//   } else {
//     return array.slice(0, 2) + ', Other';
//   }
// }
