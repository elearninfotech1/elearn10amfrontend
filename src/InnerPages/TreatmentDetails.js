import React from "react";
import { useParams } from "react-router-dom";

const TreatmentDetails = () => {
  const { id } = useParams();
  return <div>TreatmentDetails - {id}</div>;
};

export default TreatmentDetails;
