import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// estilos
import './NavBarCrewM.css';

function NavBarCrewM() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className='navBarCM'>
            <Link
                className={`linksCrewM ${currentPath === '/equipoM/a' ? 'selected' : ''}`}
                to="/equipoM/a"
            ></Link>
            <Link
                className={`linksCrewM ${currentPath === '/equipoM/b' ? 'selected' : ''}`}
                to="/equipoM/b"
            ></Link>
            <Link
                className={`linksCrewM ${currentPath === '/equipoM/c' ? 'selected' : ''}`}
                to="/equipoM/c"
            ></Link>
            <Link
                className={`linksCrewM ${currentPath === '/equipoM/d' ? 'selected' : ''}`}
                to="/equipoM/d"
            ></Link>
        </nav>
    );
}

export default NavBarCrewM;
