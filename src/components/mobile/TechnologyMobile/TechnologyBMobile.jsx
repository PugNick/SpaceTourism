import React from 'react'
import NavBarDesplegable from '../NavBarMobile/NavBarDesplegable'
import NavBarTechM from '../NavBarMobile/NavBarTechM/NavBarTechM'
//assets
import data from '../../../assets/data.json'

function TechnologyBMobile() {
    const tech = data.technology ? data.technology[1] : null;

    return (
        <div className='ContainerTechM'>
            <NavBarDesplegable />
            <div className="mainContainerTechM">
                <div className="flexP">
                    <p className='numTechM'>03</p>
                    <p>SPACE LAUNCH 101</p>
                </div>
                <div className="imgContainerTM">
                    <img src={tech.images.landscape} alt="" />
                </div>
                <NavBarTechM />
                <div className="textContainerTM">
                    <h3>THE TERMINOLOGY...</h3>
                    <h2>{tech.name}</h2>
                    <p>{tech.description}</p>
                </div>
            </div>
        </div>
    )
}

export default TechnologyBMobile