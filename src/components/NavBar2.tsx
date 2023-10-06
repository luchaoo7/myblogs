
import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom';
import { drynkBG, drynkBG2, drynkBG3 } from './utils/ImageImporter';
import PostImage from './utils/PostImage';

interface NavBarProps {
    // Add any props you might need
}

const style: CSSProperties = {
}

const NavBar2 = ({ }: NavBarProps): JSX.Element => {

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <PostImage image_path={drynkBG2} className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <PostImage image_path={drynkBG} className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <PostImage image_path={drynkBG3} className="d-block w-100"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



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
        </>
    );
};

export default NavBar2;
