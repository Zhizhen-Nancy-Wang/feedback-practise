import PropTypes from "prop-types";
import React from "react";

function Button({ children, version, isDisabled, type }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  disabled: "false",
  version: "primary",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
