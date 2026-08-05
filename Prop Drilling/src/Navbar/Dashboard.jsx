import React from "react";
import CourseCatalog from "./CourseCatalog";

function Dashboard({ user }) {
    
    return (
        <div>
        <CourseCatalog user={user} />
        </div>
      )
}

export default Dashboard;