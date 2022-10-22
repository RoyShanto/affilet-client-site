import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div>
           <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                    <img src="http://startupeuropeawards.eu/wp-content/uploads/2018/11/ICON_EHEALTH.png" alt="" height="40" width="40"/>
                    &nbsp;E-Health</a>
        
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                        <Link to="/" className="nav-link active fs-4" aria-current="page">Home</Link>
                        </li> */}
                        <li className="nav-item">
                        <Link to="/" className="nav-link fs-4">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/doctors" className="nav-link fs-4">Doctors</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/customers" className="nav-link fs-4">Customer</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/login" className="nav-link fs-4">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/logout" className="nav-link fs-4">LogOut</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;