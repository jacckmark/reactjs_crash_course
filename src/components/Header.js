import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {title}
        </a>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  title: "Test header",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
