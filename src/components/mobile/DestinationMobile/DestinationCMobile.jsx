import React from 'react'
import NavBarDesplegable from '../NavBarMobile/NavBarDesplegable'
import NavBarDestinationM from '../NavBarMobile/NavBarDestinationM/NavBarDestinationM'
//assets
import data from '../../../assets/data.json'

function DestinationCMobile() {
    const destination = data.destinations ? data.destinations[2] : null;

    return (
        <div className='containerDestionationM'>
            <NavBarDesplegable />
            <div className="mainContentDestinationM">
                <div className="flexP">
                    <p id='numDestination'>01</p>
                    <p>PICK YOUR DESTINATION</p>
                </div>
                <div className="imgContainerDM">
                    <img src={destination.images.png} alt={destination.name} />
                </div>
                <NavBarDestinationM />
                <div className="textContainerDM">
                    <h1>{destination.name}</h1>
                    <p>{destination.description}</p>
                    <hr />
                    <p className='distanceAndTime'>AVG. DISTANCE</p>
                    <h3>{destination.distance}</h3>
                    <p className='distanceAndTime'>EST TRAVEL TIME</p>
                    <h3>{destination.travel}</h3>
                </div>
            </div>
        </div>
    )
}

export default DestinationCMobile