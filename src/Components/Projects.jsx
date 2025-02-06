import React from "react";
import { motion } from "framer-motion";
import currncyImage from "../assets/Currency.png"
import Todo from '../assets/Todo.png'


// Add Projects 
const projects = [
  {
    id: 1,
    title: "Currency Exchnage",
    description: "A brief description of the project.",
    image: currncyImage,
    demoLink: "#",
    codeLink: "https://github.com/zoherkhan26/React-JS/tree/3a7caaabff57f0ea5cebf5e3df53010fc3d58136",
  },
  
  // https://github.com/zoherkhan26/React-JS/tree/3a7caaabff57f0ea5cebf5e3df53010fc3d58136/currencyExchange
  {
    id: 2,
    title: "Todo List",
    description: "A brief description of the project.",
    image: Todo,
    demoLink: "#",
    codeLink: "https://github.com/zoherkhan26/React-JS/tree/3a7caaabff57f0ea5cebf5e3df53010fc3d58136",
  },

];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center">
        <h3 className="text-white text-lg font-bold translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mt-2 text-center opacity-0 group-hover:opacity-100 transition duration-300">
          {project.description}
        </p>
        <div className="mt-4 flex gap-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white text-white rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"
          >
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 text-white min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
