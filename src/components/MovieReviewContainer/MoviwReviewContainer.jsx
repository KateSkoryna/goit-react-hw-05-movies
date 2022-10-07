// import PropTypes from 'prop-types';

const MovieReviewContainer = ({ author, content }) => {
  return (
    <>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </>
  );
};

export default MovieReviewContainer;
