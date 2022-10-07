import { useState, useEffect } from 'react';

export const useFetchInfo = (id, fetchInfo) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const findMovieInfo = async () => {
      try {
        const movieInfo = await fetchInfo(id);
        setMovieInfo(movieInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findMovieInfo();
  }, [id, fetchInfo]);

  return { movieInfo, isLoading };
};
