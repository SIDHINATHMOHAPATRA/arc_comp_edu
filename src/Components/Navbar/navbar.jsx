import "./navbar.css";
import React, { useState } from "react";
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const ChangeBg = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", ChangeBg);
    return (
        <>
            <nav className= {navbar ?"navbar navbar-expand fixed-top active" : "navbar navbar-expand fixed-top"}>
                <a href="#" className="navbar-brand">
                    <span>A</span>RCHIK
                </a>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <b>Home</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <b>About</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <b>Services</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <b>ContactUs</b>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default Navbar;