import styled from '@emotion/styled';

export const CastInfoList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const CastInfoItem = styled.li`
  flex-basis: calc((100% - 40px) / 2);
  text-align: center;
`;

export const CastImg = styled.img`
  display: block;
  width: 100%;
`;

export const CastInfoTitle = styled.h4`
  font-size: 22px;
  font-weight: 400;
`;

export const CastInfoText = styled.p`
  font-size: 26px;
  font-weight: 700;
`;
