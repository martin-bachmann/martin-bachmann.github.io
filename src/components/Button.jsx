import React, { Component } from "react";
import { Link } from "react-router-dom";

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

export default Button;
