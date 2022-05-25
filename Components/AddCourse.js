import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [course, setCourse] = useState({});
  const navigate = useNavigate();

  //form handler function
  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);
    
    e.preventDefault();
    alert("Data saved successfully");
  };

  // function for posting data on server
  const postDataToServer = (data) => {
    axios.post(`http://localhost:8080/coursedb`, data).then(
      (response) => {
        console.log(response);
        console.log("success");

      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <div className="row g-3 align-items-center">
          <div className="form-main-class">
            <label className="col-form-label" htmlFor="userId">
              Id
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter id"
              id="courseId"
              name="courseId"
              onChange={(e) => {
                setCourse({ ...course, id: e.target.value });
              }}
              />
              </div>
              <div className="form-main-class">

            <label className="col-form-label" htmlFor="userName">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter name"
              id="CourseName"
              name="CourseName"
              onChange={(e) => {
                setUser({ ...course, name: e.target.value });
              }}
              />
              </div>
              <div className="form-main-class">

            <label className="col-form-label" htmlFor="userCity">
              Description
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Description"
              id="courseDescription"
              name="courseDescription"
              onChange={(e) => {
                setUser({ ...course, description: e.target.value });
              }}
              />
              </div>
              <div className="form-main-class">

            <label className="col-form-label" htmlFor="userEmail">
              Price
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter price"
              id="coursePrice"
              name="coursePrice"
              onChange={(e) => {
                setUser({ ...course, price: e.target.value });
              }}
              />
              </div>
        </div>
          <button className="btn btn-info home-btn add-course-btn" type="submit" >Add Course</button>
      </form>
      <button className="btn btn-info home-btn go-back-add-course" onClick={() => navigate("/")}>Go Back</button>
    </>
  );
};

export default AddCourse;