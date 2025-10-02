import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Navbar.css";

const NavBarGen8 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h2>SwingWeight Gen8/Lightning</h2>
          </div>

          <div className="navbar-menu-desktop">
            <Link to="/gen8/iron" className="navbar-link">G8 Iron</Link>
            <Link to="/gen8/driver" className="navbar-link">Lightning Driver</Link>
            <Link to="/gen8/maxlite" className="navbar-link">Lightning Max Lite</Link>
            <Link to="/gen8/fairway" className="navbar-link">Lightning Fairway</Link>
            <Link to="/gen8/Hybrid" className="navbar-link">Lightning Hybrid</Link>
            <button className="rounded-btn" onClick={() => navigate("/")}>⬅ Go to Gen7</button>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default NavBarGen8;