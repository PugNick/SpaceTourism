import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// estilos
import './NavBarMobile.css';

function NavBarMobile() {
	const location = useLocation();
	const [activeLink, setActiveLink] = useState(location.pathname);

	useEffect(() => {
		setActiveLink(location.pathname);
	}, [location.pathname]);

	const handleClick = (path) => {
		setActiveLink(path);
	};

	return (
		<div className='navContainer'>
			<nav>
				<Link
					className={`LinksM ${activeLink === '/' ? 'active' : ''}`}
					to="/"
					onClick={() => handleClick('/')}
				>
					<p className='numLink'>00</p>
					<p className='nameLink'>HOME</p>
				</Link>
				<Link
					className={`LinksM ${activeLink.startsWith('/destino') ? 'active' : ''}`}
					to="/destino"
					onClick={() => handleClick('/destino')}
				>
					<p className='numLink'>01</p>
					<p className='nameLink'>DESTINATION</p>
				</Link>
				<Link
					className={`LinksM ${activeLink.startsWith('/equipo') ? 'active' : ''}`}
					to="/equipo"
					onClick={() => handleClick('/equipo')}
				>
					<p className='numLink'>02</p>
					<p className='nameLink'>CREW</p>
				</Link>
				<Link
					className={`LinksM ${activeLink.startsWith('/tecnologia') ? 'active' : ''}`}
					to="/tecnologia"
					onClick={() => handleClick('/tecnologia')}
				>
					<p className='numLink'>03</p>
					<p className='nameLink'>TECHNOLOGY</p>
				</Link>
			</nav>
		</div>
	);
}

export default NavBarMobile;
