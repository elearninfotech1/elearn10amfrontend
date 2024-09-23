import React, { useEffect, useState } from "react";
import Banner from "./banner.jpg";
import innerStyles from "./innerpages.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://elearn10amsept-1.onrender.com/treatment")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <img src={Banner} alt="Banner" />
            </div>
          </div>
        </div>
      </section>
      <section className={`py-3 ${innerStyles.tretment}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Treatments List</h1>
              <div className="row">
                {data.map((tdata) => {
                  return (
                    <div className="col-md-3 mb-3" key={tdata._id}>
                      <NavLink to={`/treatmentdetails/${tdata._id}`}>
                        <h6>{tdata.tname}</h6>
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
