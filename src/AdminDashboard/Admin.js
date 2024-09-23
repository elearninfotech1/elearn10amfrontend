import React, { useState } from "react";
import adminStyles from "./adminstyles.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/signup/login", { email, password })
      .then((res) => {
        if (res.data === "Valid") {
          navigate("/admindashboard");
        } else {
          alert("Invaid Username & Password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section className={adminStyles.breadcrumb}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Admin Login</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className={`col-md-4 ${adminStyles.formstyle}`}>
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="email"
                    placeholder="Username"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="submit"
                    value="Admin Login"
                    className="btn btn-success"
                  />
                </div>
              </form>
              <NavLink to="/register">New User?</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
