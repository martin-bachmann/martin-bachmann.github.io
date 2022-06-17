import React, { Component } from "react";
import Button from "../components/Button";
import "./projectDetails.css";

class ProjectDetails extends Component {
  render() {
    const {
      projectInfo: { id, title, smallDescription, techs },
    } = this.props;

    return (
      <div className="project-details-container">
        <h3>{`${title} - ${techs.reduce(
          (acc, tech) => `${acc}, ${tech}`
        )}`}</h3>
        <p>{smallDescription}</p>
        <Button id={id} />
      </div>
    );
  }
}

export default ProjectDetails;
