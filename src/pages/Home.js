import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionsHead from "../components/sectionsHead/SectionsHead";
import FeaturesCard from "../components/features/FeaturesCard";
import featuresData from "../components/features/featuresData";
import ServicesCard from "../components/services/ServicesCard";
import servicesData from "../components/services/servicesData";
import ProjectsCard from "../components/projects/ProjectsCard";
import projectsData from "../components/projects/projectsData";
import BlogsCard from "../components/blogs/BlogsCard";
import blogsData from "../components/blogs/blogsData";
import TestiCard from "../components/testi/TestiCard";

const Home = () => {

    useEffect(() => {
        document.title = 'ConsultX - Business Consultancy Site';
    }, []);

    return (
        <main>

            {/*===== Hero Section =====*/}
            <section id="hero">
                <div className="container">
                    <div className="wrapper hero_wrapper">
                        <div className="hero_txt_wrap">
                            <h4>We're ConsultX</h4>
                            <h1>Financial Consulting for your business</h1>
                            <p>We provide high impact financial consulting services that solve important issues in order to improve financial strategy, create more efficient procedures, and ultimately maximize revenue.</p>
                            <Link to="/about" className="btn hero_btn">Know More</Link>
                        </div>

                        <div className="hero_img_wrap">
                            <img src="./images/hero.svg" alt="hero-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/*===== Features Section =====*/}
            <section id="features" className="section">
                <div className="container">
                    <div className="wrapper features_wrapper">
                        {featuresData.map(item => <FeaturesCard key={item.id} {...item} />)}
                    </div>
                </div>
            </section>

            {/*===== Services Section =====*/}
            <section id="services" className="section">
                <div className="container">
                    <SectionsHead
                        heading="Our Services"
                        subHeading="What we bring to you"
                        link="Know More"
                        path="*"
                        icon="&#187;"
                    />
                    <div className="wrapper services_wrapper">
                        {servicesData.map(item => <ServicesCard key={item.id} {...item} />)}
                    </div>
                </div>
            </section>

            {/*===== Projects Section =====*/}
            <section id="projects" className="section">
                <div className="container">
                    <SectionsHead
                        heading="Our Projects"
                        subHeading="We are the leaders"
                        link="All Projects"
                        path="/projects"
                        icon="&#187;"
                    />
                    <div className="wrapper projects_wrapper">
                        {projectsData.slice(0, 6).map(item => <ProjectsCard key={item.id} {...item} />)}
                    </div>
                </div>
            </section>

            {/*===== Blogs Section =====*/}
            <section id="blogs" className="section">
                <div className="container">
                    <SectionsHead
                        heading="Our Blogs"
                        subHeading="Read the latest news"
                        link="All Posts"
                        path="/blogs"
                        icon="&#187;"
                    />
                    <div className="wrapper blogs_wrapper">
                        {blogsData.slice(0, 3).map(item => <BlogsCard key={item.id} {...item} />)}
                    </div>
                </div>
            </section>

            {/*===== Testimonials Section =====*/}
            <section id="testi" className="section">
                <div className="container">
                    <SectionsHead
                        heading="Testimonials"
                        subHeading="What our clients say"
                    />
                    <TestiCard />
                </div>
            </section>

        </main >
    );
};

export default Home;