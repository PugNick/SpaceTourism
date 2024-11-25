import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// estilos
import './NavBarCrewD.css';

function NavBarCrewD() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className='navBarCD'>
            <Link
                className={`LinksCrewD ${currentPath === '/equipoD/a' ? 'selected' : ''}`}
                to="/equipoD/a"
            ></Link>
            <Link
                className={`LinksCrewD ${currentPath === '/equipoD/b' ? 'selected' : ''}`}
                to="/equipoD/b"
            ></Link>
            <Link
                className={`LinksCrewD ${currentPath === '/equipoD/c' ? 'selected' : ''}`}
                to="/equipoD/c"
            ></Link>
            <Link
                className={`LinksCrewD ${currentPath === '/equipoD/d' ? 'selected' : ''}`}
                to="/equipoD/d"
            ></Link>
        </nav>
    );
}

export default NavBarCrewD;
