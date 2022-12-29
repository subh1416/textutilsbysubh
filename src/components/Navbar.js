import React from "react";
// import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/ ">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to={'/'}>
                  Home
                </Link> */}
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to={'/about'}>
                  {props.about}
                </Link> */}
                  <a className="nav-link " aria-current="page" href="#">
                  About us
                </a>
              </li>
            </ul>

            <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={() => props.toggleMode('primary')} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick={() => props.toggleMode('danger')} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={() => props.toggleMode('success')} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={() => props.toggleMode('warning')} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
            </div>
        
            <div className={`form-check form-switch text-${
                   props.mode === 'dark'?'white':'black'
                }  `}>
              <input
                className="form-check-input "
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                // onClick={() => props.toggleMode(null)}
                onClick={props.thememode}
              />
              
              {/* <label
                className={`form-check-label" for="flexSwitchCheckDefault text-${
                  props.mode === 'light'?'dark':'white'
               } `}
              >
                Enable Dark Mode
              </label> */}
              <label
                className={`form-check-label" for="flexSwitchCheckDefault text-${
                  props.mode === 'light'?'dark':'white'
               } `}
              > 
                Toggle Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
