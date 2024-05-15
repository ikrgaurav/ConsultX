import React, { useState } from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../header/headerData";
import { quickLinks, usefulLinks } from "./footerData";

const Footer = () => {

  const [subsData, setSubsData] = useState('');

  // on Subscribe-Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thankyou! You're subscribed to receive our daily newsletter.");
    setSubsData('');
  };

  // getting the currentYear
  const currYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="wrapper footer_wrapper">
            <div className="foot_about">
              <h2>ConsultX</h2>
              <p>Hire us to get the high-quality financial assistance and create more efficient strategies, and ultimately maximize revenue.</p>
              <div className="foot_social">
                {
                  socialLinks.map((item) => {
                    const { id, icon, path } = item;
                    return (
                      <Link key={id} to={path}>{icon}</Link>
                    );
                  })
                }
              </div>
            </div>

            <div className="foot_links">
              <h4>Quick Links</h4>
              <ul>
                {
                  quickLinks.map((item) => {
                    const { id, link, path } = item;
                    return (
                      <li key={id}>
                        <Link to={path}>{link}</Link>
                      </li>
                    );
                  })
                }
              </ul>
            </div>

            <div className="foot_links">
              <h4>Useful Links</h4>
              <ul>
                {
                  usefulLinks.map((item) => {
                    const { id, link, path } = item;
                    return (
                      <li key={id}>
                        <Link to={path}>{link}</Link>
                      </li>
                    );
                  })
                }
              </ul>
            </div>

            <div className="foot_subs">
              <h4>Weekly Newsletter</h4>
              <form className="subs_form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="input_field"
                  placeholder="Enter Email"
                  value={subsData}
                  onChange={(e) => setSubsData(e.target.value)}
                  required
                />
                <button type="submit" className="btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        {/* sub-footer */}
        <div className="sub_footer">
          <div className="container">
            <div className="sub_footer_wrapper">
              <div>
                <p>{currYear} | ConsultX. All Rights Reserved</p>
              </div>

              <div>
                <p>
                  Designed & Built by | <a href="https://gulshansongara.netlify.app/" target="_blank" rel="noopener noreferrer">Gulshan Songara</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;