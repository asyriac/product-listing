import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav bg-white sticky">
      <div className="nav-brand">
        <h2>
          <Link to="/">X Corp.</Link>
        </h2>
      </div>
      <ul className="nav-link">
        <li className="nav-link-item">
          <Link to="/">
            <div className="badge-container">
              <i className="fas fa-shopping-cart icon-sm"></i>
              <span className="badge-notification">0</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
