import React, { useEffect, useRef } from "react";
import HeadLine from "./HeadLine";
import { contactInfo } from "../../Data";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllContactsData } from "../redux/actions/allActions";
import { Call, Email, LocationOn } from "@mui/icons-material";

export default function ContactSection(props) {
  const data = useSelector((state) => state.CONTACTS_DATA.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsData());
  }, []);

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_3birgdt", "template_c9imdoh", form.current, {
        publicKey: "D4Z9I3jewjCxeVQ1T",
      })
      .then((_) => {
        toast.success("Message sent successfully", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: { fontSize: "18px" },
        });
        form.current.reset();
      }),
      (error) => {
        toast.error("Failed to send message. Please try again.", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: { fontSize: "18px" },
        });
        console.error("FAILED...", error.text);
      };
  }

  return (
    <section
      className="contact-section"
      id="contact"
      ref={(el) => (props.sectionRefs.current.contact = el)}
    >
      <HeadLine title="Get" subTitle="in touch" />

      <div className="contact-container">
        <form
          ref={form}
          action=""
          className="contact-form"
          onSubmit={sendEmail}
        >
          <h3>Let's work together</h3>

          <p>
            I'm excited to hear from you! Please fill out the form below, and
            I'll get back to you as soon as possible.
          </p>

          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              required
            />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email" name="email" required />
            <input
              type="text"
              placeholder="Phone Number (optional)"
              name="phone"
            />
          </div>

          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="contact-info-item">
            <div className="icon-box">
              <Call sx={{ fontSize: "3rem" }} />
            </div>

            <div className="contact-info-content">
              <span>Phone</span>

              <p>{data.phone}</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="icon-box">
              <Email sx={{ fontSize: "3rem" }} />
            </div>

            <div className="contact-info-content">
              <span>Email</span>

              <p>{data.email}</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="icon-box">
              <LocationOn sx={{ fontSize: "3rem" }} />
            </div>

            <div className="contact-info-content">
              <span>Address</span>

              <p>{data.address}</p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}
