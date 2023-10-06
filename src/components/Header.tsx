
import React, { CSSProperties } from 'react'

interface HeaderProps {
    // Add any props you might need
    heading: String;
    backgroundImage: String;
    subHeading?: String;
}


const Header = ({ heading, backgroundImage, subHeading }: HeaderProps): JSX.Element => {

    const style: CSSProperties = {
        padding:"50px",
        backgroundImage: `url('${backgroundImage}')`
    }


    return (
        <header className="masthead" style={style}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>{heading}</h1>
                            <span className="subheading">{subHeading}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;
