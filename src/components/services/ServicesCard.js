import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = (props) => {

  const { icon, title, info } = props;

  return (
    <>
      <div className="card services_card">
        <div className="badge services_icon">{icon}</div>
        <h2 className="card_title services_title">{title}</h2>
        <p className="services_info">{info}</p>
        <Link to="*" className="link_btn">Read More</Link>
      </div>
    </>
  );
};

export default ServicesCard;