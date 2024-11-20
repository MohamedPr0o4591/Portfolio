import React, { useState } from "react";
import "./auth.css";
import axios from "axios";
import { encryptedToken } from "../../../Crypted";

function Login() {
  const initialData = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialData);
  const [msgAuth, setMsgAuth] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    let flag;

    if (userData.username !== "" && userData.password !== "") {
      flag = true;
    } else flag = false;

    if (flag) {
      const searchParams = new URLSearchParams();
      searchParams.append("username", userData.username);
      searchParams.append("password", userData.password);

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_HOST}/portfolioAdmin/auth/Login.php`,
          searchParams,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        setMsgAuth("success");

        encryptedToken(res.data.user.m_id);

        setInterval(() => {
          location.pathname = "/admin/dashboard";
        }, 2000);
      } catch (err) {
        setMsgAuth("error");
      }
    }
  }

  return (
    <div className="login-page auth">
      <form action="" onSubmit={handleSubmit}>
        <h3>Login Manager</h3>
        <div className="input-box">
          <label htmlFor="username">Username</label>
          <input
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            type="text"
            id="username"
          />
        </div>

        <div className="input-box">
          <label htmlFor="pass">Password</label>
          <input
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            type="password"
            id="pass"
          />
        </div>

        <input type="submit" value="Login" />
      </form>

      {msgAuth !== "" && (
        <div
          className="container-msg"
          style={{
            backgroundColor: msgAuth === "success" ? "green" : "red",
          }}
        >
          {msgAuth === "success" ? <p>Success !</p> : <p>Error !</p>}
        </div>
      )}
    </div>
  );
}

export default Login;
