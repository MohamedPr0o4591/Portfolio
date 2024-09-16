import React from "react";
import HeadLine from "./HeadLine";
import { contactInfo } from "../../data";

export default function ContactSection(props) {
  return (
    <section
      className="contact-section"
      id="contact"
      ref={(el) => (props.sectionRefs.current.contact = el)}
    >
      <HeadLine title="Get" subTitle="in touch" />

      <div className="contact-container">
        <form action="" className="contact-form">
          <h3>Let's work together</h3>

          <p>
            I'm excited to hear from you! Please fill out the form below, and
            I'll get back to you as soon as possible.
          </p>

          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone Number (optional)" />
          </div>

          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          {contactInfo.map((info) => {
            return (
              <div className="contact-info-item" key={info.id}>
                <div className="icon-box">{info.icon}</div>

                <div className="contact-info-content">
                  <span>{info.title}</span>

                  <p>{info.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
