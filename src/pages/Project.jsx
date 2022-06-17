import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../components/Loading";
import Button from "../components/Button";
import getProject from "../services/getProject";
import "./project.css";

class Project extends Component {
  state = {
    isLoading: true,
    projectInfo: {
      id: "",
      title: "",
      description: [],
      smallDescription: "",
      techs: [],
      images: [],
    },
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const project = getProject(id);
    this.setState({ isLoading: false, projectInfo: project });
  }

  render() {
    const { isLoading, projectInfo } = this.state;
    const { title, description, techs, images } = projectInfo;
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <main class="project-main">
            <aside class="project-aside">
              {images.map(({ title, link }) => (
                <section class="project-images">
                  <img src={link} alt={title} />
                </section>
              ))}
            </aside>

            <article class=".project-article">
              <h2 class="project-h2">{title}</h2>
              <div class="project-description">
                <h3 class="project-h3">Descrição</h3>
                {description.map((p) => (
                  <p class="p-description">{p}</p>
                ))}
              </div>
              <div class="project-techs">
                <h3 class="project-h3">Ferramentas utilizadas</h3>
                {techs.map((tech) => (
                  <p class="p-techs">{tech}</p>
                ))}
              </div>
              <Button />
            </article>
          </main>
        )}
      </>
    );
  }
}

Project.propTypes = {};

export default Project;
