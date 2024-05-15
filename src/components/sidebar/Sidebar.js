import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { enquiryLinks, navLinks, socialLinks } from '../header/headerData';

const Sidebar = (props) => {

    const { sidebarIsOpen, setSidebarIsOpen } = props;

    // closing the Sidebar on clicking the Links.
    const closeSidebar = () => {
        setSidebarIsOpen(false);
    };

    return (
        <>
            <aside id="sidebar" className={`${sidebarIsOpen ? 'open' : ''}`}>
                <div className="sidebar_head">
                    <h2 className="nav_logo">
                        <Link to="/">ConsultX</Link>
                    </h2>

                    <div className="nav_social">
                        {
                            socialLinks.map((item) => {
                                const { id, icon, path } = item;
                                return (
                                    <Link key={id} to={path} onClick={closeSidebar}>
                                        {icon}
                                    </Link>
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

                <div className="sidebar_main">
                    <nav className="nav_links">
                        <ul>
                            {
                                navLinks.map((item) => {
                                    const { id, path, link } = item;
                                    return (
                                        <li key={id}>
                                            <NavLink to={path} onClick={closeSidebar}>
                                                {link}
                                            </NavLink>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;