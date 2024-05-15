import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogsCard = (props) => {

  const { img, date, category, title, post } = props;

  const [isTruncated, setIsTruncated] = useState(true);

  // toggling Read-more functionality
  const handleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <>
      <div className="card blogs_card">
        <figure className="blogs_img_wrap">
          <Link to="/blogs">
            <img src={img} alt="blog-img" />
          </Link>
        </figure>

        <div className="blogs_txt_wrap">
          <div className="blogs_meta">
            <span>{date}</span>
            <span>&nbsp; | &nbsp;</span>
            <Link to="*">
              <span>{category}</span>
            </Link>
          </div>

          <h2 className="card_title blogs_title">
            <Link to="/blogs">{title}</Link>
          </h2>

          <p className="blogs_post">
            {isTruncated ? post.slice(0, 80) + '...' : post}
          </p>

          <button
            type="button"
            className="link_btn"
            onClick={handleIsTruncated}>
            {isTruncated ? 'Read More' : 'Read Less'}
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogsCard;