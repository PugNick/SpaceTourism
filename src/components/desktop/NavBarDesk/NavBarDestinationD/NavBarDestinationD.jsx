import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// estilos
import './NavBarDestinationD.css';

function NavBarDestinationD() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className='navBarDD'>
            <Link
                className={`linksDestinationD ${currentPath === '/destinoD/a' ? 'selected' : ''}`}
                to="/destinoD/a"
            >
                MOON
            </Link>
            <Link
                className={`linksDestinationD ${currentPath === '/destinoD/b' ? 'selected' : ''}`}
                to="/destinoD/b"
            >
                MARS
            </Link>
            <Link
                className={`linksDestinationD ${currentPath === '/destinoD/c' ? 'selected' : ''}`}
                to="/destinoD/c"
            >
                EUROPA
            </Link>
            <Link
                className={`linksDestinationD ${currentPath === '/destinoD/d' ? 'selected' : ''}`}
                to="/destinoD/d"
            >
                TITAN
            </Link>
        </nav>
    );
}

export default NavBarDestinationD;
