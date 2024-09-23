import React, { useState } from "react";
import innerStyles from "./innerpages.module.css";
import axios from "axios";
const AddEmployee = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");

  const addEmployee = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/employee/", {
        name,
        phone,
        email,
        designation,
        salary,
      })
      .then((res) => {
        alert("Employee added succ....");
        setName("");
        setPhone("");
        setEmail("");
        setDesignation("");
        setSalary("");
      })
      .catch((err) => {
        alert("unable to add student");
      });
  };
  return (
    <>
      <section className={innerStyles.breadcrumb}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Add Employee</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div id="nameNote" className="text-danger"></div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    className="form-control"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="salary"
                    placeholder="Salary"
                    className="form-control"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="button"
                    value="Add Employee"
                    className="btn btn-success"
                    onClick={addEmployee}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddEmployee;
