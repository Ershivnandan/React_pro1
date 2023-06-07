import React from 'react';
import '../App.css';
import Logo from '../images/logo1.png';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark mt-5">
                <div className="container-fluid">
                    <img src={Logo} alt="Logo1" className='logo1' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-danger"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-items ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">FIND EVENTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">HOST EVENTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">CONNECT</a> 
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">CONTACT US</a>
                            </li>
                        </ul>  
                    </div>
                </div>
            </nav>
        </>
    )
}
