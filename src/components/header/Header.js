import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { enquiryLinks, navLinks, socialLinks } from "./headerData";

const Header = () => {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  // toggling the Sidebar
  const handleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  // disable the body-scroll when the Sidebar is open
  const docBody = document.body;
  sidebarIsOpen ? docBody.classList.add('overflow_hide') : docBody.classList.remove('overflow_hide');


  return (
    <>
      <header id="header">
        {/* Navbar-top */}
        <div className="navbar_top">
          <div className="container">
            <div className="navbar_wrapper">
              <div className="nav_social">
                {
                  socialLinks.map((item) => {
                    const { id, icon, path } = item;
                    return (
                      <Link key={id} to={path}>{icon}</Link>
                    );
                  })
                }
              </div>

              <div className="nav_enquiry">
                {
                  enquiryLinks.map((item) => {
                    const { id, icon, link, path } = item;
                    return (
                      <Link key={id} to={path} onClick={(e) => e.preventDefault()}>
                        {icon} &nbsp; {link}
                      </Link>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>

        {/* Navbar-bottom */}
        <div className="navbar_bottom">
          <div className="container">
            <div className="navbar_wrapper">
              <h2 className="nav_logo">
                <Link to="/">ConsultX</Link>
              </h2>

              <nav className="nav_links">
                <ul>
                  {
                    navLinks.map((item) => {
                      const { id, path, link } = item;
                      return (
                        <li key={id}>
                          <NavLink to={path}>{link}</NavLink>
                        </li>
                      );
                    })
                  }
                </ul>
              </nav>

              {/* Sidebar-toggler */}
              <div
                className={`sidebar_toggler ${sidebarIsOpen ? 'clicked' : ''}`}
                onClick={handleSidebar}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/*===== Sidebar =====*/}
      <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
    </>
  );
};

export default Header;