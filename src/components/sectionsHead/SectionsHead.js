import React from "react";
import { Link } from "react-router-dom";

const SectionsHead = (props) => {

    const { heading, subHeading, link, path, icon } = props;

    return (
        <>
            <div className="section_head">
                <div>
                    <h2 className="heading">{heading}</h2>
                    <h3 className="sub_heading">{subHeading}</h3>
                </div>

                <div>
                    <Link to={`${path}`} className="link_btn">
                        {link} <span>{icon}</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SectionsHead;