import axios from "axios";
import React, { useEffect, useState } from "react";

const DeleteTreatment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/treatment/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  });
  const deleteTreatment = (tid) => {
    axios
      .delete(`http://localhost:4000/treatment/${tid}`)
      .then((res) => {
        alert("Treatment Deleted Succ..");
      })
      .catch((err) => {
        alert("Unable to delete the Treatment");
      });
  };
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered" id="mytable">
                <thead>
                  <tr>
                    <th>T.Name</th>
                    <th>T.Desc</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((treatment) => {
                    return (
                      <tr key={treatment._id}>
                        <td>{treatment.tname}</td>
                        <td>{treatment.tdesc}</td>
                        <td>
                          <button
                            className="btn btn-danger me-3"
                            onClick={(e) => deleteTreatment(treatment._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteTreatment;
