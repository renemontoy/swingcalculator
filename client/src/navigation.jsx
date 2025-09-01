// navigation.js
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h2>SwingWeight PXG</h2>
          </div>

          <div className="navbar-menu-desktop">
            <Link to="/iron" className="navbar-link">Iron</Link>
            <Link to="/driver" className="navbar-link">Driver</Link>
            <Link to="/ultralite" className="navbar-link">Ultra Lite</Link>
            <Link to="/secretweapon" className="navbar-link">Secret Weapon</Link>
            <Link to="/fairway" className="navbar-link">Fairway</Link>
            <Link to="/hybrid" className="navbar-link">Hybrid</Link>
          </div>
        </div>
      </nav>
      
      {/* Este Outlet es donde se renderizarán los componentes de las rutas hijas */}
      <Outlet />
    </div>
  );
};

export default NavBar;