import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//imagenes
import logo from '../../../assets/imgs/shared/logo.svg';
// estilos
import './NavBarTablet.css';

function NavBarTablet() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className='navContainerT'>
            <div className="logoContainerT">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <Link
                    className={`LinksT ${currentPath === '/' ? 'selected' : ''}`}
                    to="/"
                >
                    <p className='numLinkT'>00</p>
                    <p className='nameLinkT'>HOME</p>
                </Link>
                <Link
                    className={`LinksT ${currentPath.startsWith('/destinoT') ? 'selected' : ''}`}
                    to="/destinoT/a"
                >
                    <p className='numLinkT'>01</p>
                    <p className='nameLinkT'>DESTINATION</p>
                </Link>
                <Link
                    className={`LinksT ${currentPath.startsWith('/equipoT') ? 'selected' : ''}`}
                    to="/equipoT/a"
                >
                    <p className='numLinkT'>02</p>
                    <p className='nameLinkT'>CREW</p>
                </Link>
                <Link
                    className={`LinksT ${currentPath.startsWith('/tecnologiaT') ? 'selected' : ''}`}
                    to="/tecnologiaT/a"
                >
                    <p className='numLinkT'>03</p>
                    <p className='nameLinkT'>TECHNOLOGY</p>
                </Link>
            </nav>
        </div>
    );
}

export default NavBarTablet;
