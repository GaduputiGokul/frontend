import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import UpdateCourse from "./UpdateCourse";

const Course = ({ course, update }) => {
  const navigate = useNavigate();
  // deleting the user
  const deleteCourse = (id) => {
    axios.delete(`http://localhost:8080/course/${id}`).then(
      (response) => {
        console.log("deleted successfully");
        alert("Deleted Successfully");
        update(id);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  // const updateUser = (userId) => {
  //   axios.delete(`http://localhost:8080/employees/${userId}`).then(
  //     (response) => {
  //       console.log("updated successfully");
  //     },
  //     (error) => {console.log(error)}
  //   )
  //       updateValue(userId);
  // }

  return (
    <div className="coursediv">
      {/* <tr>
                    <td width="30%">{user.name}</td>
                    <td width="30%">{user.city}</td>
                    <td width="40%">{user.email}</td>
                </tr> */}

      <div className="allCourses">
        <div classname="id">{course.id}</div>
        <div className="name">{course.name}</div>
        <div className="description">{course.description}</div>
        <div className="price">{course.price}</div>
      </div>

      <button  className="btn btn-danger course-delete-btn"
        onClick={() => {
          deleteCourse(course.id);
        }}
      >
        Delete
      </button>
      <button onClick={() => {
        alert("Use id as "+ course.id);
        <UpdateUser key = {course.id} value={course}  />
        navigate('updatecourses');
      }}>Update</button>
    </div>
  );
};

export default Course;