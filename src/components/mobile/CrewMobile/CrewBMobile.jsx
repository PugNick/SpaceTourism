import React from 'react'
import NavBarDesplegable from '../NavBarMobile/NavBarDesplegable'
import NavBarCrewM from '../NavBarMobile/NavBarCrewM/NavBarCrewM'
//assets
import data from '../../../assets/data.json'

function CrewBMobile() {
    const crewT = data.crew ? data.crew[1] : null;

    return (
        <div className='ContainerCrewM'>
            <NavBarDesplegable />
            <div className="mainContentCrewM">
                <div className="flexPC">
                    <p className='numCrewM'>02</p>
                    <p>MEET YOUR CREW</p>
                </div>
                <div className="textCenterCM">
                    <div className="textContainerCM">
                        <h3>{crewT.role}</h3>
                        <h2>{crewT.name}</h2>
                        <p>{crewT.bio}</p>
                    </div>
                </div>
                <NavBarCrewM />
                <div className="markShuttleworth">
                    <img src={crewT.images.png} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CrewBMobile