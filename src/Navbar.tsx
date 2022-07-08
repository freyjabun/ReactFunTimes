import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/button">the big red button lol</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
