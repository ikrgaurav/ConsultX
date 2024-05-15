import React from "react";
import PagesHead from "../components/pagesHead/PagesHead";
import useDocTitle from "../utils/customHooks/useDocTitle";

const About = () => {

    useDocTitle('About');

    return (
        <>
            <section id="about" className="section page_section">
                <PagesHead title="About us" />
                <div className="container">
                    <div className="wrapper about_wrapper">
                        <div className="about_img_wrap">
                            <img src="./images/business_plan.svg" alt="about-img" />
                        </div>

                        <div className="about_txt_wrap">
                            <h2>Emergency Financial Aid to Your Business. <br />
                                <span>Top Financial Advisor on the Market.</span>
                            </h2>
                            <p>Our company is one of the leaders on the financial market with more than 20 years of experience. We know your future, but you are the person who creates it. Together we will make your business successful.</p>
                            <p>We help businesses of all kinds to grow financial assets, create a management strategy, defeat competitors and more. Our professionals provide all services with unique tools and methodologies that proved their efficiency for many years.</p>
                            <ul className="about_numbs">
                                <li>
                                    <h4>151+</h4>
                                    <span>Projects</span>
                                </li>
                                <li>
                                    <h4>12+</h4>
                                    <span>Years</span>
                                </li>
                                <li>
                                    <h4>09</h4>
                                    <span>Awards</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;