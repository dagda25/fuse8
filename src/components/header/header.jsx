import React from "react";
import PropTypes from "prop-types";
import './header.scss';

const Header = (props) => {
  const {title} = props;

  return (
    <section className="main-header">
      <h1 className="main-header__title">{title}</h1>
    </section>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
