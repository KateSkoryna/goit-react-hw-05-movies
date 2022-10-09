import SharedLayout from 'components/SharedLayout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const MovieCard = lazy(() => import('../../pages/MovieCard'));
const MovieDataPage = lazy(() => import('../../pages/MovieDataPage'));
const MovieCastBox = lazy(() =>
  import('../../pages/MovieCastBox/MovieCastBox')
);
const MovieReviewBox = lazy(() =>
  import('../../pages/MovieReviewBox/MovieReviewBox')
);

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
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
