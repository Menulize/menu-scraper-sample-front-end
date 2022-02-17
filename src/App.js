import React, { Component } from 'react'
import Uploader from './Uploader'
import './App.css' 
import './LuckiestGuy-Regular.ttf'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
class App extends React.Component {
    render () {
        return(
          <>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossorigin="anonymous"
            />
            <header className="topbar" data-navbarbg="skin5">
            <nav className="navbar top-navbar bg-dark navbar-expand-md navbar-dark">
                <div className="navbar-header" data-logobg="skin6">
                    <a className="navbar-brand" href="/">
                        <b className="logo-icon">
                        </b>
                        <span className="logo-text brand-text p-4">
                          <b>Menu Finder Demo</b>
                        </span>
                    </a>
                    <a className="nav-toggler waves-effect waves-light text-dark d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                   
                    <ul className="navbar-nav ms-auto d-flex align-items-center">

                        <li className=" in">
                            <form role="search" className="app-search d-none d-md-block me-3">
                                <input type="text" placeholder="Search..." className="form-control mt-0" />
                                <a href="" className="active">
                                    <i className="fa fa-search"></i>
                                </a>
                            </form>
                        </li>
                        <li>
                            <a className="profile-pic" href="#">
                                </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
            <div className="page-wrapper">
              <Router>
                <Routes>
                  <Route path="/" element={<Uploader />} />
                </Routes>
              </Router>
            </div>
          </>
        )   
    }   
}

export default App;
