import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const UpdateCourse = ({value}) => {
    const [course, setCourse] = useState({value});
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

//   const id = userDetails.id;
    return (
        <>
          <form onSubmit={handleForm}>
            <div className="row g-3 align-items-center">
              <div className="form-main-class">
                <label className="col-form-label" htmlFor="courseId">
                  Id
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter id"
                  id="courseId"
                  name="courseId"
                //   value={userid}
                  onChange={(e) => {
                    //   console.log(value.id);
                    setUser({ ...course, id: e.target.value });
                  }}
                  />
                  </div>

                  <div className="form-main-class">
    
                 <label className="col-form-label" htmlFor="courseId">
                  ID
                 </label>
                 <input
                    className="form-control"
                    type="text"
                    placeholder="Enter id"
                    id="courseId"
                    name="courseId"
    //   value={name}
               onChange={(e) => {
               setUser({ ...course, id: e.target.value });
               }}
              />
              </div>

                  <div className="form-main-class">
    
                <label className="col-form-label" htmlFor="courseName">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter name"
                  id="courseName"
                  name="courseName"
                //   value={name}
                  onChange={(e) => {
                    setUser({ ...course, name: e.target.value });
                  }}
                  />
                  </div>
                  <div className="form-main-class">
    
                <label className="col-form-label" htmlFor="courseDecsription">
                  Description
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter description"
                  id="courseDescription"
                  name="courseDescription"
                  onChange={(e) => {
                    setUser({ ...course, description: e.target.value });
                  }}
                  />
                  </div>
                  <div className="form-main-class">
    
                <label className="col-form-label" htmlFor="coursePrice">
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
}

export default UpdateCourse;