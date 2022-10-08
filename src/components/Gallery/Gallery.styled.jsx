import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 40px) / 2);
  font-size: 26px;
  font-weight: 500;
  text-align: center;
`;

export const Link = styled(NavLink)`
  color: black;

  &:hover,
  &:focus {
    color: red;
    font-weight: 700;
  }
`;
