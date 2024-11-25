import React from 'react'
import NavBarDesk from '../NavBarDesk/NavBarDesk'
import NavBarCrewD from '../NavBarDesk/NavBarCrewD/NavBarCrewD'
//assets
import data from '../../../assets/data.json'
//estilos
import './CrewDesk.css';

function CrewADesk() {

    const crewT = data.crew ? data.crew[0] : null;

    return (
        <div className='ContainerCrewD'>
            <NavBarDesk />
            <div className="containerCDPadd">
                <div className="flexPCD">
                    <p id='numCD'>02</p>
                    <p id='MYCD'>MEET YOUR CREW</p>
                </div>
                <div className="mainContentCrewD">
                    <div className="infoCD">
                        <div className="textContainerCD">
                            <h3>{crewT.role}</h3>
                            <h2>{crewT.name}</h2>
                            <p>{crewT.bio}</p>
                        </div>
                        <NavBarCrewD />
                    </div>
                    <div className="imgContainerCD">
                        <img src={crewT.images.png} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrewADesk        