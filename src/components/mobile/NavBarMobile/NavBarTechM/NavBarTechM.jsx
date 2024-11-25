import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
//estilos
import './NavBarTechM.css';

function NavBarTechM() {

    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);

    useEffect(() => {
        setSelected(location.pathname);
    }, [location.pathname]);

    return (
        <nav className='navBarTM'>
            <Link
                className={`linkTechM ${selected === '/tecnologiaM/a' ? 'selected' : ''}`}
                to="/tecnologiaM/a"
                onClick={() => setSelected('/tecnologiaM/a')}
            >
                1
            </Link>
            <Link
                className={`linkTechM ${selected === '/tecnologiaM/b' ? 'selected' : ''}`}
                to="/tecnologiaM/b"
                onClick={() => setSelected('/tecnologiaM/b')}
            >
                2
            </Link>
            <Link
                className={`linkTechM ${selected === '/tecnologiaM/c' ? 'selected' : ''}`}
                to="/tecnologiaM/c"
                onClick={() => setSelected('/tecnologiaM/c')}
            >
                3
            </Link>
        </nav>
    )
}

export default NavBarTechM  