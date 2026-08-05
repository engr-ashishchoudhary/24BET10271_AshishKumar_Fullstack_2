import React from "react";
import CourseList from "./CourseList";

function CourseCatalog({ user }) {
    return (
        <div>
        <CourseList user={user} />
        </div>
      )
    
}

export default CourseCatalog;