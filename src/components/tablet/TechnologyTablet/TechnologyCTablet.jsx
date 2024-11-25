import React from 'react'
import NavBarTablet from '../NavBarTablet/NavBarTablet'
import NavBarTechT from '../NavBarTablet/NavBarTechT/NavBarTechT'
//assets
import data from '../../../assets/data.json'

function TechnologyCTablet() {

    const tech = data.technology ? data.technology[2] : null;

    return (
        <div className='containerTechT'>
            <NavBarTablet />
            <div className="mainContainerTechT">
                <div className="flexPT">
                    <p id='numTechT'>03</p>
                    <p id='categoryTechT'>SPACE LAUNCH 101</p>
                </div>
                <div className="imgContainerTM">
                    <img src={tech.images.landscape} alt="" />
                </div>
                <NavBarTechT />
                <div className="flexTextTechT">
                    <div className="textContainerTT">
                        <h3>THE TERMINOLOGY...</h3>
                        <h2>{tech.name}</h2>
                        <p>{tech.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnologyCTablet