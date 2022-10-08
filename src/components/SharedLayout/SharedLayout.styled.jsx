import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  display: block;
  width: 80px;
  color: black;
  text-transform: uppercase;
  font-weight: 900;
  padding: 10px;

  &.active {
    color: white;
    background-color: red;
  }
`;
