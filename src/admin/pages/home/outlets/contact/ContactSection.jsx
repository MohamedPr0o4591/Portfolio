import React, { useState } from "react";
import "./ContactSection.css";
import { Container } from "@mui/material";
import axios from "axios";

function ContactSection() {
  let initialState = {
    email: "",
    phone: "",
    address: "",
  };
  const [dataInfo, setDataInfo] = useState(initialState);

  async function handleSubmit(e) {
    e.preventDefault();
    let flag;

    if (
      dataInfo.phone !== "" ||
      dataInfo.email !== "" ||
      dataInfo.address !== ""
    ) {
      flag = true;
    } else flag = false;

    if (flag) {
      const formData = new FormData();

      if (dataInfo.phone !== "") {
        formData.append("phone", dataInfo.phone);
      }

      if (dataInfo.email !== "") {
        formData.append("email", dataInfo.email);
      }

      if (dataInfo.address !== "") {
        formData.append("address", dataInfo.address);
      }

      try {
        await axios.post(
          `${import.meta.env.VITE_HOST}/portfolioAdmin/contact/editContact.php`,
          formData
        );

        alert("Updated Successfully");
      } catch (err) {
        alert(err);
      }
    } else alert("Please fill all the fields");
  }

  return (
    <div className="contact-section-outlet">
      <p className="heading">/Contact</p>
      <h3>/Contact</h3>

      <Container>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={dataInfo.phone}
              onChange={(e) =>
                setDataInfo({ ...dataInfo, phone: e.target.value })
              }
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={dataInfo.email}
              onChange={(e) =>
                setDataInfo({ ...dataInfo, email: e.target.value })
              }
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={dataInfo.address}
              onChange={(e) =>
                setDataInfo({ ...dataInfo, address: e.target.value })
              }
            />
          </div>

          <input type="submit" value={"Submit"} />
        </form>
      </Container>
    </div>
  );
}

export default ContactSection;
