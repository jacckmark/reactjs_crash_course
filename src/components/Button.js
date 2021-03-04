import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn-${color}`}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "click me",
  color: "primary",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
