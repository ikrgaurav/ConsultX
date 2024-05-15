import React from "react";
import PagesHead from "../components/pagesHead/PagesHead";
import ContactForm from "../components/contact/ContactForm";
import ContactActions from "../components/contact/ContactActions";
import { contactActionsData } from "../components/contact/contactData";
import useDocTitle from "../utils/customHooks/useDocTitle";

const Contact = () => {

  useDocTitle('Contact');

  return (
    <>
      <section id="contact" className="section page_section">
        <PagesHead title="Contact" />
        <div className="container">
          <div className="wrapper contact_wrapper">

            {/* Contact-actions */}
            <div className="contact_actions">
              <h2>We'd love to hear from you</h2>
              <ul className="contact_actions_list">
                {
                  contactActionsData.map(item => (
                    <li key={item.id}>
                      <ContactActions {...item} />
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* Contact-form */}
            <div className="contact_form">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;