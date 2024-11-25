import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// estilos
import './NavBarTechT.css';

function NavBarTechT() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className='navBarTT'>
            <Link
                className={`linksTechT ${currentPath === '/tecnologiaT/a' ? 'selected' : ''}`}
                to="/tecnologiaT/a"
            >
                1
            </Link>
            <Link
                className={`linksTechT ${currentPath === '/tecnologiaT/b' ? 'selected' : ''}`}
                to="/tecnologiaT/b"
            >
                2
            </Link>
            <Link
                className={`linksTechT ${currentPath === '/tecnologiaT/c' ? 'selected' : ''}`}
                to="/tecnologiaT/c"
            >
                3
            </Link>
        </nav>
    );
}

export default NavBarTechT;
