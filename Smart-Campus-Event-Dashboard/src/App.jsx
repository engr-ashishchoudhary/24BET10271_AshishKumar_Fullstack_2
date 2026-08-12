import { useState } from "react";
import { StudentProvider } from "./context/StudentContext";
import Dashboard from "./components/Dashboard";
import StudentInfo from "./components/StudentInfo";
import "./App.css";

function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <StudentProvider>
      <div className="app">
        <Dashboard />

        <button onClick={() => setShowDetails(!showDetails)}>
          Toggle Student Details
        </button>

        {showDetails && <StudentInfo />}
      </div>
    </StudentProvider>
  );
}

export default App;