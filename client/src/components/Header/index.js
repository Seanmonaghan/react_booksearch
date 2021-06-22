import React from "react";


function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Search Books</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Find a Book</button></a>
                    </li>
                    <li className="nav-item" id="saved">
                        <a className="nav-link" href="/saved"><button type="button" className="btn btn-danger text-white">View Saved Books</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;