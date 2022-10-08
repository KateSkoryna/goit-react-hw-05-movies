import styled from '@emotion/styled';
import { Form } from 'formik';

export const SearchbarBox = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 10px;
  background-image: repeating-radial-gradient(
    circle,
    black,
    red 20px,
    black 30px,
    red 20px
  );
`;

export const FormStyles = styled(Form)`
  position: relative;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const LabelStyles = styled.label`
  width: 100%;
`;

export const InputStyles = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 40px;
  padding-right: 10px;
  background-color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  outline: none;

  &:hover,
  &:focus {
    border-color: rgba(255, 0, 0, 0.7);
  }
`;

export const ButtonBox = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  padding-top: 5px;
  width: 30px;
  height: 100%;
  background-color: white;
  border: transparent;

  &:hover,
  &:focus {
    background-color: rgba(255, 0, 0, 0.7);
  }
`;
