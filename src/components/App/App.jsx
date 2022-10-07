import SharedLayout from '../../components/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { Home, MovieCard, MovieDataPage } from 'pages';
import MovieCastBox from 'components/MovieCastBox';
import MovieReviewBox from 'components/MovieReviewBox';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MovieDataPage />} />
        <Route path="movies/:id" element={<MovieCard />}>
          <Route path="cast" element={<MovieCastBox />} />
          <Route path="review" element={<MovieReviewBox />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
