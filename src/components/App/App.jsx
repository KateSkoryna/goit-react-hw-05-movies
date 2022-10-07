import SharedLayout from '../../components/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import MovieDataPage from 'pages/MovieDataPage';
import Home from 'pages/Home';
import MovieCard from 'pages/MovieCard';
import MovieCastBox from 'components/MovieCastBox';
import MovieReviewBox from 'components/MovieReviewBox';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MovieDataPage />}>
          <Route path="movies/:id" element={<MovieCard />}>
            <Route path="cast" element={<MovieCastBox />} />
            <Route path="review" element={<MovieReviewBox />} />
          </Route>
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
