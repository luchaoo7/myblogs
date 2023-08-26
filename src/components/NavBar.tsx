
import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom';

interface NavBarProps {
    // Add any props you might need
}

const style: CSSProperties = {
}

const NavBar = ({ }: NavBarProps): JSX.Element => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link style={style} className="navbar-brand" to="/nba">All About It</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item"><Link style={style} className="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link> </li>
                        <li className="nav-item"><Link style={style} className="nav-link px-lg-3 py-3 py-lg-4" to="/about">About</Link> </li>
                        <li className="nav-item"><Link style={style} className="nav-link px-lg-3 py-3 py-lg-4" to="/nba">First Post</Link> </li>
                        <li className="nav-item"><Link style={style} className="nav-link px-lg-3 py-3 py-lg-4" to="/contact">Contact</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
