import React from 'react'
import NavBarTablet from '../NavBarTablet/NavBarTablet'
import NavBarDestinationT from '../NavBarTablet/NavBarDestinationT/NavBarDestinationT'
//assets
import data from '../../../assets/data.json';

function DestinationDTablet() {
    const destination = data.destinations ? data.destinations[3] : null;

    return (
        <div className='containerDestionationT'>
            <NavBarTablet />
            <div className="mainContentDestinationT">
                <div className="felxPT">
                    <p id='numDT'>01</p>
                    <p id='categoryDT'>PICK YOUR DESTINATION</p>
                </div>
                <div className="imgContainerDT">
                    <img src={destination.images.png} alt={destination.name} />
                </div>
                <NavBarDestinationT />
                <div className="textContainerDT">
                    <h2>{destination.name}</h2>
                    <p>{destination.description}</p>
                    <hr />

                    <div className="flexDateT">
                        <div className="flexDistanceT">
                            <p>AVG. DISTANCE</p>
                            <h3>{destination.distance}</h3>
                        </div>
                        <div className="flexTravelT">
                            <p>EST TRAVEL TIME</p>
                            <h3>{destination.travel}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationDTablet