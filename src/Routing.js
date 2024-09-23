import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./InnerPages/Home";
import AboutUs from "./InnerPages/AboutUs";
import Treatments from "./InnerPages/Treatments";
import BookAppointment from "./InnerPages/BookAppointment";
import ContactUs from "./InnerPages/ContactUs";
import NoPage from "./InnerPages/NoPage";
import Admin from "./AdminDashboard/Admin";
import Register from "./AdminDashboard/Register";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AddTreatment from "./AdminDashboard/AddTreatment";
import DeleteOffers from "./AdminDashboard/DeleteOffers";
import DeleteTreatment from "./AdminDashboard/DeleteTreatment";
import AddOffers from "./AdminDashboard/AddOffers";
import TreatmentDetails from "./InnerPages/TreatmentDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/treatments" element={<Treatments />} />
      <Route path="/bookappointment" element={<BookAppointment />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/treatmentdetails/:id" element={<TreatmentDetails />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admindashboard" element={<AdminDashboard />}>
        <Route path="" element={<AddTreatment />} />
        <Route path="deletetreatment" element={<DeleteTreatment />} />
        <Route path="addoffer" element={<AddOffers />} />
        <Route path="deleteoffer" element={<DeleteOffers />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default Routing;
