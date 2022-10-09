import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Global } from '@emotion/react';
import { GlobalStyles } from '../App/GlobalStyles.styled';
import { Container } from '../App/Container.styled';
import { Header, Navigation, Link } from './SharedLayout.styled';
import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
        <Header>
          <Navigation>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </Navigation>
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
