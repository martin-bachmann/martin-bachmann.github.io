import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../components/Button";

class ProjectDetails extends Component {
  render() {
    const {
      projectInfo: { id, title, smallDescription, techs },
    } = this.props;

    return (
      <div>
        <h3>{`${title} - ${techs.reduce(
          (acc, tech) => `${acc}, ${tech}`
        )}`}</h3>
        <p>{smallDescription}</p>
        <Button id={id} />
      </div>
    );
  }
}

ProjectDetails.propTypes = {};

export default ProjectDetails;
