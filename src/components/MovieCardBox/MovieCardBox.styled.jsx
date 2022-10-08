import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const MovieBox = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const GoBackLink = styled(Link)`
  display: flex;
  font-size: 12px;
  width: 80px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  text-transform: uppercase;
  font-weight: 700;
  color: black;
  border: black 1px solid;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    color: white;
    font-weight: 700;
    background-color: red;
    border: transparent 1px solid;
  }
`;

export const MovieDescriptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const MovieImg = styled.img`
  display: block;
  margin-right: 20px;
`;

export const MovieInfo = styled.div`
  flex-grow: 2;
  justify-content: flex;
`;

export const MovieTitle = styled.h2`
  font-size: 38px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const MovieInfoTitle = styled.h3`
  font-size: 32px;
`;

export const MovieInfoText = styled.p`
  font-size: 26px;
  margin-bottom: 10px;
`;

export const FeatureLink = styled(NavLink)`
  color: black;
  font-size: 26px;

  &:hover,
  &:focus {
    color: red;
    font-weight: 700;
  }
`;
