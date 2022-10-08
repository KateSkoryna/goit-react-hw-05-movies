import { Outlet } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalStyles } from '../App/GlobalStyles.styled';
import { Container } from '../App/Container.styled';
import { Header, Navigation, Link } from './SharedLayout.styled';

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
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
