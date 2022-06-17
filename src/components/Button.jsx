import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { id } = this.props;

    return (
      <>
        {id ? (
          <Link to={`/project/${id}`}>Detalhes</Link>
        ) : (
          <Link to={`/`}>Voltar</Link>
        )}
      </>
    );
  }
}

Button.propTypes = {};

export default Button;
