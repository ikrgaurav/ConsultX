import React from "react";

const ContactActions = (props) => {

    const { icon, title, info } = props;

    return (
        <>
            <div className="badge contact_actions_icon">{icon}</div>
            <div className="contact_actions_info">
                <h4>{title}</h4>
                <p>{info}</p>
            </div>
        </>
    );
};

export default ContactActions;