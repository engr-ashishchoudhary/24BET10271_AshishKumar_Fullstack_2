import Dashboard from "./Dashboard";

function App() {
    const employee = {
        name: "Rahul Sharma",
        department: "Engineering",
        leaveBalance: 12,
    };

    return <Dashboard employee={employee} />;
}

export default App;
