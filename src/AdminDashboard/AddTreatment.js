import React, { useState } from "react";
import adminStyles from "./adminstyles.module.css";
import axios from "axios";
const AddTreatment = () => {
  const [tname, SetTname] = useState("");
  const [tdesc, SetTdesc] = useState("");
  const addTreatment = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/treatment", {
        tname,
        tdesc,
      })
      .then((res) => {
        alert("Treatment added succ....");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className={`col-md-6 ${adminStyles.formstyle}`}>
            <form onSubmit={addTreatment}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Treatment"
                  value={tname}
                  onChange={(e) => SetTname(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Descrption"
                  value={tdesc}
                  onChange={(e) => SetTdesc(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  value="Add Treament"
                  className="btn btn-success"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTreatment;
