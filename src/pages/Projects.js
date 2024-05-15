import React, { useState } from "react";
import PagesHead from "../components/pagesHead/PagesHead";
import ProjectsCard from "../components/projects/ProjectsCard";
import projectsData from "../components/projects/projectsData";
import useDocTitle from "../utils/customHooks/useDocTitle";

const Projects = () => {

  useDocTitle('Projects');

  const [browseMore, setBrowseMore] = useState(3);

  const handleBrowse = () => {
    setBrowseMore(browseMore + 3);
  };

  return (
    <>
      <section id="projects_page" className="section page_section">
        <PagesHead title="All Projects" />
        <div className="container">
          <div className="projects_page_content">
            <div className="wrapper projects_wrapper">
              {projectsData.slice(0, browseMore).map(item => <ProjectsCard key={item.id} {...item} />)}
            </div>
            <button
              type="button"
              className="btn"
              onClick={handleBrowse}>
              Browse More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;