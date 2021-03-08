import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid d-flex">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <div className="d-flex justify-self-end">
          <Link className="mr-3" to="/">
            Home
          </Link>
          <Link className="mr-3" to="/about">
            About Us
          </Link>
          <Link className="mr-3" to="/shop">
            Shop Now
          </Link>
        </div>
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
