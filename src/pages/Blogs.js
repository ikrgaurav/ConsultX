import React, { useState } from "react";
import blogsData from "../components/blogs/blogsData";
import BlogsCard from "../components/blogs/BlogsCard";
import PagesHead from "../components/pagesHead/PagesHead";
import useDocTitle from "../utils/customHooks/useDocTitle";

const Blogs = () => {

  useDocTitle('Blogs');

  const [browseMore, setBrowseMore] = useState(3);

  const handleBrowse = () => {
    setBrowseMore(browseMore + 3);
  };

  return (
    <>
      <section id="blogs_page" className="section page_section">
        <PagesHead title="Blogs" />
        <div className="container">
          <div className="blogs_page_content">
            <div className="wrapper blogs_wrapper">
              {blogsData.slice(0, browseMore).map(item => <BlogsCard key={item.id} {...item} />)}
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

export default Blogs;