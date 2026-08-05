import React from "react";
import StudentProfile from "./StudentProfile";

function CourseList({ user }) {
    return (
        <div>
            <StudentProfile user={user} />
        </div>
      )
    
}

export default CourseList;