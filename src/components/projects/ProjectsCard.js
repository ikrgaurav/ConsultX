import React from "react";
import { Link } from "react-router-dom";

const ProjectsCard = (props) => {

    const { img, title, link, path } = props;

    return (
        <>
            <div className="card projects_card">
                <figure className="projects_img_wrap">
                    <Link to={path}>
                        <img src={img} alt={title} />
                    </Link>
                </figure>

                <div className="projects_txt_wrap">
                    <h3 className="projects_title">{title}</h3>
                    <Link to={path}>{link}</Link>
                </div>
            </div>
        </>
    );
};

export default ProjectsCard;