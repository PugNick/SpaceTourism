import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// imágenes
import logo from '../../../assets/imgs/shared/logo.svg';
// estilos
import './NavBarDesk.css';

function NavBarDesk() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className='navContainerD'>
            <div className="logoContainerD">
                <img src={logo} alt="Logo" />
            </div>
            <nav className='contentLinksD'>
                <Link className={`LinksNavDesk ${currentPath === '/' ? 'selected' : ''}`} to="/">
                    <p className='numLinksDesk'>00</p>
                    <p className='categoryNavDesk'>HOME</p>
                </Link>
                <Link className={`LinksNavDesk ${currentPath.startsWith('/destinoD') ? 'selected' : ''}`} to="/destinoD/a">
                    <p className='numLinksDesk'>01</p>
                    <p className='categoryNavDesk'>DESTINATION</p>
                </Link>
                <Link className={`LinksNavDesk ${currentPath.startsWith('/equipoD') ? 'selected' : ''}`} to="/equipoD/a">
                    <p className='numLinksDesk'>02</p>
                    <p className='categoryNavDesk'>CREW</p>
                </Link>
                <Link className={`LinksNavDesk ${currentPath.startsWith('/tecnologiaD') ? 'selected' : ''}`} to="/tecnologiaD/a">
                    <p className='numLinksDesk'>03</p>
                    <p className='categoryNavDesk'>TECHNOLOGY</p>
                </Link>
            </nav>
        </div>
    );
}

export default NavBarDesk;
