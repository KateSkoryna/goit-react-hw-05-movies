import axios from 'axios';

const KEY = 'fd7341fdf0f2e94a335192ece09ea376';

const fetchTrendData = async page => {
  const url = 'https://api.themoviedb.org/3/trending/movie/week';

  try {
    const { data } = await axios.get(`${url}?api_key=${KEY}&page=${page}`);
    return data.results;
  } catch (error) {
    console.error('Something wrong! Can not get full trends' + error);
  }
};

const fetchSearchData = async (value, page) => {
  const url = 'https://api.themoviedb.org/3/search/movie';

  try {
    const { data } = await axios.get(
      `${url}?api_key=${KEY}&query=${value}&page=${page}`
    );
    return data.results;
  } catch (error) {
    console.error('Something wrong! Can not search films' + error);
  }
};

export { fetchTrendData, fetchSearchData };
