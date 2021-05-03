import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/about" exact>
                                    About me
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">Contact</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className="nav-info-label">Email</li>
                                <li>
                                    <NavLink to="/" exact>
                                        dolong2310@gmail.com
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Phone</li>
                                <li>0708 922 384</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">My address</li>
                                <li>35 Dai Nghia</li>
                                <li>Ward 6, Tan Binh District</li>
                                <li>Ho Chi Minh City</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
