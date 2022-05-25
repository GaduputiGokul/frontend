import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 id="welcome-heading">Welcome</h2>
      <div className="all-btns-home">
        <button
          className="btn btn-info home-btn"
          onClick={() => {
            navigate("addcourses", { replace: true });
          }}
        >
          Add Courses  
               </button>
        <button
          className="btn btn-info home-btn"
          onClick={() => {
            navigate("allemployees", { replace: true });
          }}
        >
          View Courses
        </button>
      </div>
    </div>
  );
};

export default Home;