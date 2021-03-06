// profile, login, register
import { Outlet, Link } from "react-router-dom";
import { useState, useContext, Fragment } from "react";
import UserContext from "../../context/userContext";

const NavBar = () => {
  const { user } = useContext(UserContext)
 
  const authenticated = (
    <Fragment>
       <h2>hi, {user.username}</h2>
    </Fragment>
  )

  const guest = (
    <Fragment>
      <h2>welcome</h2>
    </Fragment>
  
  )

  const authenticated2 = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
      </li>
    </Fragment>
  )

  const guest2 = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/Login">Log in</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="/Register">Register</Link>
      </li>

    </Fragment>
  )

    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="text-left">
              {user.authenticated ? authenticated : guest }
              </div>
              <Link className="navbar-brand mx-auto" to="/">LiebSpace</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                  {user.authenticated ? authenticated2 : guest2}
                  {/* <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
                  </li> */}
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/Login">Log in</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Register">Register</Link>
                  </li> */}
                  {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li> */}
                  
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
               </div>
            </div>
          </nav>
          <Outlet />
        </div>
    );
}

export default NavBar;