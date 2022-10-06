import SharedLayout from '../../components/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import MovieDataPage from '../../pages/MovieDataPage';
import Home from '../../pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<MovieDataPage />} />
      </Route>

      {/* <Route path="movies/:movieId" element={} /> */}
    </Routes>
  );
};

export default App;
