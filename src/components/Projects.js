import React from "react";
import "../assets/css/Project.css";
import Test from "../assets/images/test.png";
import Github from "../assets/images/github-icon.png";
import Links from "../assets/images/link.png";

function Projects({ projects }) {
  return (
    <section id="projects">
      <div className="projects">
      <div className="about-heading-container">
        <h1 className="about-heading">Projects</h1>
      </div>
      <div className="projects-container">
   
      {projects.map((project)=>{
        return(
            <div className="project">
            <div className="project-img-container">
              <img src={project.image} alt="" className="project-img" />
            </div>
            <div className="project-wrapper">
              <div className="another-wrapper">
                <div className="project-heading-container">
                  <h2 className="project-heading">{project.name}</h2>
                </div>
                <div className="project-framework">
                  <h6>• {project.framework}</h6>
                </div>
                <div className="project-btn-container">
                  <a href={project.link} target="_blank">
                    {" "}
                    <button className="link-btn project-btn">
                      <span>
                        <img src={Links} alt="" className="btn-icon" />
                      </span>
                      &nbsp;<span className="text">VIEW PROJECT</span>
                    </button>
                  </a>
                  <a href={project.github} target="_blank">
                    {" "}
                    <button className="github-btn project-btn">
                      <span>
                        <img src={Github} alt="" className="btn-icon" />
                      </span>
                      &nbsp;<span className="text">GITHUB LINK</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}


        {/* <div className="project">
          <div className="project-img-container">
            <img src={Test} alt="" className="project-img" />
          </div>
          <div className="project-wrapper">
            <div className="another-wrapper">
              <div className="project-heading-container">
                <h2 className="project-heading">E-commerce Site</h2>
              </div>
              <div className="project-framework">
                <h6>• React.Js</h6>
              </div>
              <div className="project-btn-container">
                <a href="">
                  {" "}
                  <button className="link-btn project-btn">
                    <span>
                      <img src={Links} alt="" className="btn-icon" />
                    </span>
                    &nbsp;<span className="text">VIEW PROJECT</span>
                  </button>
                </a>
                <a href="">
                  {" "}
                  <button className="github-btn project-btn">
                    <span>
                      <img src={Github} alt="" className="btn-icon" />
                    </span>
                    &nbsp;<span className="text">GITHUB LINK</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div> */}


     
        
      </div>
    </div>
    </section>
    
  );
}

export default Projects;
