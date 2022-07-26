import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudent() {
      axios
        .get("http://localhost:8070/students/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }
    getStudent();
  }, []);

  return <div className='container'> AllStudent</div>;
}
