import React, { Component } from "react";
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
          <main className="project-main">
            <aside className="project-aside">
              {images.map(({ title, link }) => (
                <section className="project-images">
                  <img src={link} alt={title} />
                </section>
              ))}
            </aside>

            <article className="project-article">
              <h2 className="project-h2">{title}</h2>
              <div className="project-description">
                <h3 className="project-h3">Descrição</h3>
                {description.map((p) => (
                  <p className="p-description">{p}</p>
                ))}
              </div>
              <div className="project-techs">
                <h3 className="project-h3">Ferramentas utilizadas</h3>
                {techs.map((tech) => (
                  <p className="p-techs">{tech}</p>
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

export default Project;
