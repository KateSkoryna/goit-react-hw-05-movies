import PropTypes from 'prop-types';

const MovieReviewContainer = ({ author, content }) => {
  return (
    <>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </>
  );
};

MovieReviewContainer.propTypes = PropTypes.shape({
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

export default MovieReviewContainer;
