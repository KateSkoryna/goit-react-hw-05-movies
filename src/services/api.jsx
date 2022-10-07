import axios from 'axios';

const API = 'https://api.themoviedb.org/3/trending/movie/week';
const KEY = 'fd7341fdf0f2e94a335192ece09ea376';

const fetchTrendData = async page => {
  try {
    const { data } = await axios.get(`${API}?api_key=${KEY}&page=${page}`);
    return data.results;
  } catch (error) {
    console.error('Something wrong! Can not get full trends' + error);
  }
};

const fetchSearchData = async (value, page) => {
  try {
    const { data } = await axios.get(
      `${API}?api_key=${KEY}&query=${value}&page=${page}`
    );
    return data.results;
  } catch (error) {
    console.error('Something wrong! Can not search films' + error);
  }
};

const fetchDataById = async id => {
  try {
    const { data } = await axios.get(`${API}${id}?api_key=${KEY}`);
    return data;
  } catch (error) {
    console.error('Something wrong! Can not search films by ID' + error);
  }
};

export { fetchTrendData, fetchSearchData, fetchDataById };
