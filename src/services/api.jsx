import axios from 'axios';

const KEY = 'fd7341fdf0f2e94a335192ece09ea376';

const fetchTrendData = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/week';
  try {
    const { data } = await axios.get(`${url}?api_key=${KEY}&page=1`);
    return data.results;
  } catch (error) {
    console.error('Something wrong! Can not get full trends' + error);
  }
};

const fetchSearchData = async value => {
  const url = 'https://api.themoviedb.org/3/trending/movie/week';
  try {
    const { data } = await axios.get(
      `${url}?api_key=${KEY}&query=${value}&page=1`
    );
    return data.results;
  } catch (error) {
    console.error('Something wrong! Can not search films' + error);
  }
};

const fetchDataById = async id => {
  const url = 'https://api.themoviedb.org/3/movie/';

  try {
    const { data } = await axios.get(
      `${url}${id}?api_key=${KEY}&append_to_response=reviews`
    );
    return data;
  } catch (error) {
    console.error('Something wrong! Can not search films by ID' + error);
  }
};

export { fetchTrendData, fetchSearchData, fetchDataById };
