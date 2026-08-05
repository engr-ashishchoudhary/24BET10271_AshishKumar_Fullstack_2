import React from "react";
import Dashboard from "./Navbar/Dashboard";


function App() {
  const user = {
  name: "Karan Mehta",
  email: "karan@gmail.com",
  program: "Web Development"
};


  return (
    <div>
     <Dashboard user={user} />
    </div>
  )
}
export default App;
