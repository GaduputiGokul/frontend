import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";
import User from "./Components/Course";
import AllUsers from "./Components/AllCourses";
import AddUser from "./Components/AddCourse";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import UpdateUser from "./Components/UpdateCourse";
import { Button } from "reactstrap";
import {ToastContainer, toast} from "react-toastify"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allemployees" element={<AllUsers />}></Route>
        <Route path="/addemployees" element={<AddUser />}></Route>
        <Route path="/allemployees/updateemployees" element={<UpdateUser />}></Route>
      </Routes>
      {/* <GetUser /> */}
    </div>
  );
}

export default App;