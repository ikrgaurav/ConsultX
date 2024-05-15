import React, { useState } from "react";

const ContactForm = () => {

    const [inputData, setInputData] = useState({
        username: "",
        email: "",
        subject: "",
        message: ""
    });

    // on Contact-form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Thankyou ${inputData.username.toUpperCase()}, your form is submitted successfully`);

        setInputData({
            username: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    // handling the input-fields data
    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputData({
            ...inputData,
            [name]: value
        });
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="input_group">
                <div className="input_box">
                    <input
                        type="text"
                        className="input_field"
                        placeholder="Name *"
                        name="username"
                        value={inputData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input_box">
                    <input
                        type="email"
                        className="input_field"
                        placeholder="Email *"
                        name="email"
                        value={inputData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="input_box">
                <input
                    type="text"
                    className="input_field"
                    placeholder="Subject *"
                    name="subject"
                    value={inputData.subject}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="input_box">
                <textarea
                    rows="5"
                    className="input_field"
                    placeholder="How can we help you? *"
                    name="message"
                    value={inputData.message}
                    onChange={handleChange}
                    required
                />
            </div>

            <button
                type="submit"
                className="btn contact_btn">
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;