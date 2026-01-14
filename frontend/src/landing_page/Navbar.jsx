import React from 'react';

function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg border-bottom px-5 py-4">
                <div className="container">
                    <a className="navbar-brand px-5 ms-5" href="#">
                        <img src="/media/images/logo.svg" alt="Zerodha Logo" style={{width:"24%"}} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                            <li className="nav-item px-3 ">
                                <a className="nav-link" href="#">Signup</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">Product</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">Support</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#" role="button">
                                    <i className="fa-solid fa-bars"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;