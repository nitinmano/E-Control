import React, { Component } from 'react';

import logo from '../../../public/logo.svg.proxy.js';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="80" height="50" class="d-inline-block align-text-top" />

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-sm btn-outline-primary me-2">Get Started</button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export { Navbar };