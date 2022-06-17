const projects = [
  {
    id: "1",
    title: "Projeto 1",
    description: [
      "Descrição do projeto 1. Aqui pode ir uma descrição geral do que faz o projeto, assim como descrições menores de cada uma das partes significativas, habilidades utilizads e desafios encontrados",
    ],
    smallDescription: "Breve descrição do que foi feito no projeto",
    techs: ["Ferramenta 1", "Ferramenta 2", "Ferramenta 3"],
    images: [
      { title: "Imagem 1", link: "/projeto1-imagem1.png" },
      { title: "Imagem 2", link: "/projeto1-imagem2.png" },
    ],
  },
  {
    id: "2",
    title: "Portfólio pessoal",
    description: [
      "Porfólio pessoal com acesso as páginas específicas de cada projeto, desenvolvido com React Router.",
      "Home: possui espaço para foto do usuário, botões de LinkedIn e Github, informações pessoais, habilidades e projetos, com botão para página de detalhes para cada projeto.",
      "Página de detalhes de projeto: apresenta imagens do projeto, assim como descrição e uma lista das ferramentas utilizadas.",
    ],
    smallDescription:
      "Portfólio pessoal com acesso a páginas específicas de cada projeto, desenvolvido com React Router.",
    techs: ["JavaScript", "React", "React Router", "CSS"],
    images: [
      { title: "Imagem 1", link: "/Home.png" },
      { title: "Imagem 2", link: "/Project-2.png" },
    ],
  },
];

export default projects;
