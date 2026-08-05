import React from "react";
import CourseList from "./CourseList";

function StudentProfile({ user }) {
  return (
    <div>
        <p>------------------------------------------------</p>
        <h2>SKILLNEST - ONLINE LEARNING PLATFORM</h2>
        <p>------------------------------------------------</p>
        <p>Welcome: {user.name}</p>
        <p>Program: {user.program} </p>
        <p>Enrolled:0</p>
        <br />

        <h4>COURSE CATALOG</h4>
        <p>React Basics             ₹999</p>
        <button>[Enroll]</button>
        <p>Node.js Essentials       ₹1199</p>
        <button>[Enroll]</button>
        <p>UI/UX Design              ₹799</p>
        <button>[Enroll]</button>
        <br />
        <h4>Student Detail</h4>
      <p>Student Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Program: {user.program}</p>
      
    </div>
  )
}

export default StudentProfile;