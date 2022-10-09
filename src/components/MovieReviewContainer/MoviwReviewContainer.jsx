import PropTypes from 'prop-types';
import { ReviewText } from './MoviwReviewContainer.styled';

const MovieReviewContainer = ({ author, content }) => {
  return (
    <>
      <h4>Author: {author}</h4>
      <ReviewText>{content}</ReviewText>
    </>
  );
};

MovieReviewContainer.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MovieReviewContainer;
