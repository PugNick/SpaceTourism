import React from 'react'
import NavBarTablet from '../NavBarTablet/NavBarTablet'
import NavBarCrewT from '../NavBarTablet/NavBarCrewT/NavBarCrewT'
//assets
import data from '../../../assets/data.json';
//estilos
import './CrewTablet.css';

function CrewATablet() {

    const crewT = data.crew ? data.crew[0] : null;

    return (
        <div className='containerCrewT'>
            <NavBarTablet />
            <div className="mainContentCrewT">
                <div className="flexCPT">
                    <p id='numCT'>02</p>
                    <p id='categoryCT'>MEET YOUR CREW</p>
                </div>
                <div className="contentTextC">
                    <div className="textContainerCT">
                        <h3>{crewT.role}</h3>
                        <h2>{crewT.name}</h2>
                        <p>{crewT.bio}</p>
                    </div>
                </div>
                <NavBarCrewT />
                <div className="imgContainerCT">
                    <img src={crewT.images.png} alt="" />
                </div>
            </div>

        </div>
    )
}

export default CrewATablet