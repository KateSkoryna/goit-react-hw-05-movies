import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalStyles } from '../App/GlobalStyles.styled';
import { Container } from '../App/Container.styled';

const SharedLayout = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </header>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
