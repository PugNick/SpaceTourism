import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// estilos
import './NavNarTechD.css';

function NavBarTechD() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className='navBarTD'>
            <Link
                className={`linksNavTechD ${currentPath === '/tecnologiaD/a' ? 'selected' : ''}`}
                to="/tecnologiaD/a"
            >
                1
            </Link>
            <Link
                className={`linksNavTechD ${currentPath === '/tecnologiaD/b' ? 'selected' : ''}`}
                to="/tecnologiaD/b"
            >
                2
            </Link>
            <Link
                className={`linksNavTechD ${currentPath === '/tecnologiaD/c' ? 'selected' : ''}`}
                to="/tecnologiaD/c"
            >
                3
            </Link>
        </nav>
    );
}

export default NavBarTechD;
