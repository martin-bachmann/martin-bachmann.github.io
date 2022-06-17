import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./button.css";

class Button extends Component {
  render() {
    const { id } = this.props;

    return (
      <>
        {id ? (
          <Link className="button" to={`/project/${id}`}>
            Detalhes
          </Link>
        ) : (
          <Link className="button" to={`/`}>
            Voltar
          </Link>
        )}
      </>
    );
  }
}

export default Button;
