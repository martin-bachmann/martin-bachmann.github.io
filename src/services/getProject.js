import projects from "../data/projects";

const getProject = (id) => {
  return projects.find((project) => project.id === id);
};

export default getProject;
