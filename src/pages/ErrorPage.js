import React from 'react';
import useDocTitle from '../utils/customHooks/useDocTitle';

const ErrorPage = () => {

    useDocTitle('Page Not Found');

    return (
        <>
            <section id="error_page" className="section">
                <div className="container">
                    <div className="error_page_content">
                        <figure className="error_img">
                            <img src="./images/error.svg" alt="error-img" />
                        </figure>
                        <h1>Sorry, the requested page was not found.</h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;