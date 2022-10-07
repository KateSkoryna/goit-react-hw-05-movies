import { BsSearch } from 'react-icons/bs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import {
  SearchbarBox,
  FormStyles,
  InputStyles,
  LabelStyles,
  ButtonBox,
} from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const hendleSubmit = values => {
    if (values.inputValue === '') {
      Notify.failure('Please, enter something for me to find!');
    } else {
      onSubmit(values);
      window.localStorage.setItem(
        'values',
        JSON.stringify(Object.values(values))
      );
    }
  };
  return (
    <SearchbarBox>
      <Formik
        initialValues={{
          inputValue: JSON.parse(window.localStorage.getItem('values')) ?? '',
        }}
        onSubmit={hendleSubmit}
      >
        <FormStyles>
          <LabelStyles>
            <Field
              name="inputValue"
              as={InputStyles}
              placeholder="Search images and photos"
              autocomplete="off"
            />
          </LabelStyles>
          <ButtonBox type="submit">
            <BsSearch width="20" height="20" />
          </ButtonBox>
        </FormStyles>
      </Formik>
    </SearchbarBox>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
