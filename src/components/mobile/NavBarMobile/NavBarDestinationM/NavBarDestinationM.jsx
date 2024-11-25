import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// estilos
import './NavBarDestinationM.css';

function NavBarDestinationM() {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);

    useEffect(() => {
        setSelected(location.pathname);
    }, [location.pathname]);

    return (
        <nav className='navBarDM'>
            <Link
                className={`linksDestination ${selected === '/destinoM/a' ? 'selected' : ''}`}
                to="/destinoM/a"
                onClick={() => setSelected('/destinoM/a')}
            >
                MOON
            </Link>
            <Link
                className={`linksDestination ${selected === '/destinoM/b' ? 'selected' : ''}`}
                to="/destinoM/b"
                onClick={() => setSelected('/destinoM/b')}
            >
                MARS
            </Link>
            <Link
                className={`linksDestination ${selected === '/destinoM/c' ? 'selected' : ''}`}
                to="/destinoM/c"
                onClick={() => setSelected('/destinoM/c')}
            >
                EUROPA
            </Link>
            <Link
                className={`linksDestination ${selected === '/destinoM/d' ? 'selected' : ''}`}
                to="/destinoM/d"
                onClick={() => setSelected('/destinoM/d')}
            >
                TITAN
            </Link>
        </nav>
    );
}

export default NavBarDestinationM;
