import React, { useState } from 'react';
import NavBarMobile from './NavBarMobile';
//imagenes
import logo from '../../../assets/imgs/shared/logo.svg';
import hamburguer from '../../../assets/imgs/shared/icon-hamburger.svg';
import close from '../../../assets/imgs/shared/icon-close.svg';
//estilos
import './NavBarDesplegable.css';

function NavBarDesplegable() {

    const [mostrar, setMostrar] = useState(false);

    //funcion para el boton hamburguesa (desplegar menu)
    const mostrarElemento = () => {
        setMostrar(true);
    };

    //funcion para el boton de X (esconder menu)
    const ocultarElemento = () => {
        setMostrar(false);
    };

    return (
        <div className="headNav">
            <div className="imgLogoCont">
                <img src={logo} alt="Logo" />
            </div>
            <button id='hamburguer' onClick={mostrarElemento}>
                <img src={hamburguer} alt="Menu" />
            </button>
            <div className={`containerGhost ${mostrar ? 'show' : 'hide'}`}>
                <div className="closeButton">
                    <button onClick={ocultarElemento}>
                        <img src={close} alt="Cerrar" />
                    </button>
                </div>
                <NavBarMobile />
            </div>
        </div>
    );
}

export default NavBarDesplegable;
