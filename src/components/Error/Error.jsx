import PropTypes from "prop-types";

export const Error = ({ message }) => {
  return <>
    {message}
  </>;
};

Error.propTypes = {
  message: PropTypes.string
}

Error.defaultProps = {
  message: "Oops, quelque chose a deconné 😥"
}
