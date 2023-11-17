import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


export default function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="../src/public/images/shopping-bag (2).svg" />
          Bind
          <br />
          <small>Delivery</small>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/orders/order" className="nav-link">
                Order
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/beADeliver" className="nav-link">
                BecomeAdeliver
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/binds/binds" className="nav-link">
                Binds
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users/logout" className="nav-link">
                Logout
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users/profile" className="nav-link">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/singup" className="nav-link">
                Sing up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Log in
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
