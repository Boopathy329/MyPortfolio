import React from "react";
import websiteImg1 from "../assets/cake.jpg";
import websiteImg2 from "../assets/food-ecommerce.jpg";
import websiteImg3 from "../assets/website-blog.jpg";

const Projects = () => {
  const config = {
    Projects: [
      {
        image: websiteImg1,
        description: "Cake website using react.js and like inspire by bakingo",
        link: "http://boopathydev.in/",
      },
      {
        image: websiteImg2,
        description:
          " Food webstie using bootstrap and like a swiggy",
        link: "https://boopathy329.github.io/foodwebsite_bsp/",
      },
      {
        image: websiteImg3,
        description: "Basic Blog Website.Built with Next js and MongoDB",
        link: "",
      },
    ],
  };
  return (
    <section
      className="flex flex-col justify-center py-20 px-5 bg-primary"
      id="projects"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl text-white border-b-4 mb-5 font-bold w-[140px] border-second">
            Projects
          </h1>
          <p className="text-white">
            These are some of my best projects. I have built these with
            React,MERN and TailwindCSS.Check them out.
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-5 px-10 text-white">
          {config.Projects.map((project) => (
            <div className="relative">
              <img
                className="h-[300px] w-[500px]"
                src={project.image}
                alt=""
              />
              <div className="project-desc">
                <p className="text-center px-5 py-5">{project.description}</p>
                <div className="flex justify-center">
                <a className="btn" target="-blank" href={project.link}>view project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
