import React from 'react'
import NavBarDesk from '../NavBarDesk/NavBarDesk'
import NavBarTechD from '../NavBarDesk/NavBarTechD/NavBarTechD'
//assets
import data from '../../../assets/data.json'
//estilos
import './TechnologyDesk.css';

function TechnologyADesk() {

    const tech = data.technology ? data.technology[0] : null;

    return (
        <div className='ContainerTechT'>
            <NavBarDesk />
            <div className="mainContainerTechD">
                <div className="flexPDT">
                    <p id='numTechD'>03</p>
                    <p id='PTD'>SPACE LAUNCH 101</p>
                </div>
                <div className="flexTextImg">
                    <div className="textContainerD">
                        <div className="textNavBarD">
                            <NavBarTechD />
                            <div className="textDates">
                                <h3>THE TERMINOLOGY...</h3>
                                <h2>{tech.name}</h2>
                                <p>{tech.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="imgContainerTD">
                        <img id='imgPortrait' src={tech.images.portrait} alt="" />
                        <img id='imgLandscape' src={tech.images.landscape} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TechnologyADesk