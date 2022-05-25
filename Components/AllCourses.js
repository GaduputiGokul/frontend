import React from "react";
import { useState, useEffect } from "react";
import User from "./Course";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllCourses = () => {
  const [listOfCourses, setListOfCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const removeCourse = (id) => {
    setListOfCourses(listOfCourses.filter((u) => u.id != id));
  };

  const getAllCoursesFromServer = () => {
    axios.get(`http://localhost:8080/coursedb`).then(
      (response) => {
        // console.log(response);
        console.log(response.data);
        setListOfCourses(response.data);
      },
      (error) => {}
    );
  };

  return (
    <div>
      <h2> List of Courses </h2>
      <table >
        <tr>
          {/* <th width="30%">Name</th>
          <th width="30%">City</th>
          <th width="40%">Email</th> */}
          <td>Id</td>
          <td>Name</td>
          <td id="descriptioncoln">Description</td>
          <td id ="pricecoln">Price</td>
        </tr>
        
          {listOfCourses.length > 0
          ? listOfCourses.map((item) => (
            <User key={item.id} course={item} update={removeCourse}  />
            ))
            : "No Courses"}
        
            </table>
      <button className="btn btn-info go-back-allCourse" onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default AllCourses;