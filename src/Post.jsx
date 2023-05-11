import PropTypes from 'prop-types';

export function Post(props) {
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.content}</p>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
