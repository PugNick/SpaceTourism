import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// estilos
import './NavBarCrewT.css';

function NavBarCrewT() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className='navBarCT'>
            <Link
                className={`linksCrewT ${currentPath === '/equipoT/a' ? 'selected' : ''}`}
                to="/equipoT/a"
            ></Link>
            <Link
                className={`linksCrewT ${currentPath === '/equipoT/b' ? 'selected' : ''}`}
                to="/equipoT/b"
            ></Link>
            <Link
                className={`linksCrewT ${currentPath === '/equipoT/c' ? 'selected' : ''}`}
                to="/equipoT/c"
            ></Link>
            <Link
                className={`linksCrewT ${currentPath === '/equipoT/d' ? 'selected' : ''}`}
                to="/equipoT/d"
            ></Link>
        </nav>
    );
}

export default NavBarCrewT;
