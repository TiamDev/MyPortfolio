import { useState } from "react";
import React , { useRef }from "react";
import emailjs from '@emailjs/browser';

import "./contact.css";
const Contact=()=>{
  const form = useRef();
  const [status, setStatus] = useState({});
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qcvoptc', 'template_c2bo2mh', form.current, {
        publicKey: 'U9Th2EtMnSem9-qp6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus({ succes: true, message: "Message sent successfully" });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        },
      );
  };
  return(
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
        </div>
        <form action="" className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder="Insert your name" name="name"/>
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder="Insert your email" name="email"/>
            </div>
          </div>
          <div className="contact__form-div">
            <input type="text" className="contact__form-input" placeholder="Insert your subject" name="subject"/>
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea id="" cols="30" rows="10" className="contact__form-input" placeholder="Write Your message" name="message"></textarea>
          </div>
          {status.message && (
                              <p
                                className={
                                  status.success === false ? "danger message" : "message"
                                }
                              >
                                {status.message}
                              </p>
          )}          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
