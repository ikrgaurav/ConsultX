import React from "react";

const FeaturesCard = (props) => {

  const { icon, title, info } = props;

  return (
    <>
      <div className="card features_card">
        <div className="badge features_icon">{icon}</div>
        <h2 className="card_title features_title">{title}</h2>
        <p className="features_info">{info}</p>
      </div>
    </>
  );
};

export default FeaturesCard;