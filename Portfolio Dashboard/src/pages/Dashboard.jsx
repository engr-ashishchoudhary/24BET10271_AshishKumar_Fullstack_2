import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <section className="dashboard">
      <h1>Dashboard</h1>

      <nav className="dashboard-subnav">
        <NavLink to="/dashboard/profile" className={linkClass}>
          Profile
        </NavLink>
        <NavLink to="/dashboard/settings" className={linkClass}>
          Settings
        </NavLink>
      </nav>

      <div className="dashboard-content">
        <Outlet />
      </div>
    </section>
  );
}
