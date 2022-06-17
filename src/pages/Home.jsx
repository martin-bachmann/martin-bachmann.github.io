import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProjectDetails from "../components/ProjectDetails";
import projects from "../data/projects";

class Home extends Component {
  render() {
    return (
      <main class="main">
        <aside class="main-aside">
          <section class="bio-section">
            <h3>Sobre mim:</h3>
            <p class="p-grande">
              Sou estudante de Desenvolvimento Web na Trybe. Minha meta para os
              próximos anos é construir uma carreira como programador.
            </p>
          </section>
        </aside>
        <section class="main-articles">
          <article>
            <h3>Habilidades</h3>
            <div class="habilidade">
              <h4>JavaScript</h4>
              <p class="p-pequeno">
                Linguagem de programação muito utilizada no desenvolvimento web,
                permitindo criar páginas interativas.
              </p>
            </div>
            <div class="habilidade">
              <h4>React</h4>
              <p class="p-pequeno">
                Biblioteca de JavaScript desenvolvida pelo Facebook que tem como
                foco a construção de interfaces de usuário em páginas web.
              </p>
            </div>
            <div class="habilidade">
              <h4>HTML</h4>
              <p class="p-pequeno">
                Linguagem que estrutura as páginas web, permitindo sua
                modelação.
              </p>
            </div>
            <div class="habilidade">
              <h4>CSS</h4>
              <p class="p-pequeno">
                Permite adicionar estilos para páginas web, possibilitando sua
                customização.
              </p>
            </div>
          </article>
          <article>
            <h3>Projetos</h3>
            {projects.map((project) => (
              <ProjectDetails projectInfo={project} />
            ))}
          </article>
        </section>
      </main>
    );
  }
}

Home.propTypes = {};

export default Home;
