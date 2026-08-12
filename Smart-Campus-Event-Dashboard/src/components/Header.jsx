import { useStudent } from "../context/StudentContext";

function Header() {
    const student = useStudent();

    return (
        <header className="dashboard-header">
            <h1>Campus Event Dashboard</h1>
            <p className="welcome-line">Welcome {student.name}</p>
        </header>
    );
}

export default Header;
