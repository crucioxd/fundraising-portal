import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>FundraiseHub</h1>
      <div className="links">
        <NavLink to="/" end>
          Login
        </NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
      </div>
    </nav>
  );
}
