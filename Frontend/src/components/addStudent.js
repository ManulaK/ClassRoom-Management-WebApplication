import React, { useState } from "react";
import axios from "axios";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendDate(e) {
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender,
    };

    axios
      .post("http://localhost:8070/students/add", newStudent)
      .then(() => {
        alert("Student added successfully!");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className='container'>
      <form onSubmit={sendDate}>
        <div className='mb-3'>
          <label for='name' className='form-label'>
            Student Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Enter student name'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className='mb-3'>
          <label for='age' className='form-label'>
            Student age
          </label>
          <input
            type='Number'
            className='form-control'
            id='age'
            placeholder='Enter student age'
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <div className='mb-3'>
          <label for='gender' className='form-label'>
            Student gender
          </label>
          <input
            type='text'
            className='form-control'
            id='gender'
            placeholder='Enter student gender'
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}
