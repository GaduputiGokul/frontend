import axios from "axios";
import React, { useEffect, useState } from "react";

const GetCourse = () => {
     const [user, setCourse] = useState({});


     const handleSubmitUser = (e) => {
         console.log(e.target.value);
        getTheCourse(e.target.value);
        e.preventDefault();
     }

     const getTheCourse = (id) => {
         axios.get(`http://localhost:8080/course/${id}`).then(
             (response) => {console.log(response.data)},
             (error) => {console.log(error)}
         )
     }

    //  useEffect(() => {
    //       getTheUser;
    //  }, []) 

     return (
         <>
           <label htmlFor="idLabel">Id</label>
           <input type="text" placeholder="enter the id" name="idLabel" id="idLabel" />
           <button onClick={handleSubmitUser} type="submit">Search</button>
         </>
     );
}

export default GetCourse;