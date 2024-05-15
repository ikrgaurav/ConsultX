import React from "react";

const PagesHead = (props) => {
    return (
        <>
            <div className="page_head">
                <h2>{props.title}</h2>
            </div>
        </>
    );
};

export default PagesHead;