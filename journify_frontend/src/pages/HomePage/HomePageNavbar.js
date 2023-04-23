import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePageNavbar.scss";

function HomePageNavbar() {
    const [data, setData] = useState();

    return (
        <div className="App">
            <nav className="homepage-navbar">
                <div className="homepage-navbar-logo">
                    <Link to="/">Journify</Link>
                </div>
                <ul className="homepage-navbar-buttons">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/explore">Explore Destinations</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );    
}

export default HomePageNavbar;