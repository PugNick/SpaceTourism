import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// estilos
import './NavBarDestinationT.css';

function NavBarDestinationT() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className='navBarDT'>
            <Link
                className={`linksDestinationT ${currentPath === '/destinoT/a' ? 'selected' : ''}`}
                to="/destinoT/a"
            >
                MOON
            </Link>
            <Link
                className={`linksDestinationT ${currentPath === '/destinoT/b' ? 'selected' : ''}`}
                to="/destinoT/b"
            >
                MARS
            </Link>
            <Link
                className={`linksDestinationT ${currentPath === '/destinoT/c' ? 'selected' : ''}`}
                to="/destinoT/c"
            >
                EUROPA
            </Link>
            <Link
                className={`linksDestinationT ${currentPath === '/destinoT/d' ? 'selected' : ''}`}
                to="/destinoT/d"
            >
                TITAN
            </Link>
        </nav>
    );
}

export default NavBarDestinationT;
