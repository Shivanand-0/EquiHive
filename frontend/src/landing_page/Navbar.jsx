import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg border-bottom px-5 py-4 position-sticky top-0 bg-white" style={{zIndex:'1000'}}>
                <div className="container">
                    <Link className="navbar-brand px-5 ms-5" to="/">
                        <img src="/media/images/logo.svg" alt="Zerodha Logo" style={{width:"24%"}} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                            <li className="nav-item px-3 ">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="/product">Product</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="/support">Support</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" to="/" role="button">
                                    <i className="fa-solid fa-bars"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;