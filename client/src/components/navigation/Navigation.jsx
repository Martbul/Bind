import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import AuthContext from "../../contexts/authContext";


export default function Navigation() {
  const {isAuthenticated, username} = useContext(AuthContext)


  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/binds/binds">
          <img src="../src/public/images/shopping-bag (2).svg" />
          Bind
          <br />
          <small>Доставка</small>
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
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-linkActive nav-link" : "nav-link"
                }
              >
                Как работи
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/binds/binds"
                className={({ isActive }) =>
                  isActive ? "nav-linkActive nav-link" : "nav-link"
                }
              >
                Пзарувай
              </NavLink>
              {/* <NavLink
                to="/orders/order"
                className={({ isActive }) =>
                  isActive ? "nav-linkActive nav-link" : "nav-link"
                }
              >
                Пзарувай
              </NavLink> */}
            </li>
            {isAuthenticated == true && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/beADeliver"
                    className={({ isActive }) =>
                      isActive ? "nav-linkActive nav-link" : "nav-link"
                    }
                  >
                    Стани доставчик
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-linkActive nav-link" : "nav-link"
                }
              >
                За нас
              </NavLink>
            </li>{" "}
            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-linkActive nav-link" : "nav-link"
                }
              >
               Блог
              </NavLink>
            </li>{" "}
            <li className="nav-item">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "nav-linkActive nav-link" : "nav-link"
                }
              >
                <img src=" ./src/public/images/ass.png" alt="" />
              </NavLink>
            </li>{" "}
            {isAuthenticated == true && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? "nav-linkActive nav-link" : "nav-link"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                      isActive ? "nav-linkActive nav-link" : "nav-link"
                    }
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            )}
            {isAuthenticated == false && (
              <>
                <li className="nav-item"></li>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "nav-linkActive nav-link" : "nav-link"
                    }
                  >
                    Влез
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
