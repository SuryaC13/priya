import React from "react";
import ecommerce from "../assets/portfolio/ecommerce.jpg";
import pwd from "../assets/portfolio/pwd.jpeg";
import calc1 from "../assets/portfolio/calc1.jpeg";


const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommerce,
      link: "https://ecommerce1-1.herokuapp.com/",
      name: "Ecommerce"
    },
    {
      id: 2,
      src: pwd,
      link: "https://password-generator-01.herokuapp.com/",
      name: "Password generator"
    },
    {
      id: 3,
      src: calc1,
      link: "https://react-calc-01.herokuapp.com/",
      name: "calculator"
    },
  ];

  return (
    <div name="projects" id="projects"className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Personal projects</p>
          <p className="py-6">Check out some of my personal projects here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0">
          {portfolios.map(({ id, src, link, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"/>
              <div className="flex items-center justify-center">
                <button key={id} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link} rel="noopener" target ='_blank' className="text-decoration-none text-green-500">
                  Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href="https://github.com/Priya-219" rel="noopener" target ='_blank' className="text-decoration-none text-red-500">Code</a>
                </button>
              </div>
                 <p key={id} className="text-center">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
