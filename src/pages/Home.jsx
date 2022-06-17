import React, { Component } from "react";
import ProjectDetails from "../components/ProjectDetails";
import projects from "../data/projects";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <main className="home-main">
        <aside className="home-aside">
          <section className="bio-section">
            <h2>Sobre mim:</h2>
            <p className="p-bio">
              Sou estudante de Desenvolvimento Web na Trybe. Minha meta para os
              próximos anos é construir uma carreira como programador.
            </p>
          </section>
        </aside>
        <section className="home-section">
          <article className="home-articles">
            <h2>Habilidades</h2>
            <div className="skills">
              <h3>JavaScript</h3>
              <p className="p-skills">
                Linguagem de programação muito utilizada no desenvolvimento web,
                permitindo criar páginas interativas.
              </p>
            </div>
            <div className="skills">
              <h3>React</h3>
              <p className="p-skills">
                Biblioteca de JavaScript desenvolvida pelo Facebook que tem como
                foco a construção de interfaces de usuário em páginas web.
              </p>
            </div>
            <div className="skills">
              <h3>HTML</h3>
              <p className="p-skills">
                Linguagem que estrutura as páginas web, permitindo sua
                modelação.
              </p>
            </div>
            <div className="skills">
              <h3>CSS</h3>
              <p className="p-skills">
                Permite adicionar estilos para páginas web, possibilitando sua
                customização.
              </p>
            </div>
          </article>
          <article className="home-articles">
            <h2>Projetos</h2>
            <div className="projects-container">
              {projects.map((project) => (
                <ProjectDetails projectInfo={project} />
              ))}
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default Home;
