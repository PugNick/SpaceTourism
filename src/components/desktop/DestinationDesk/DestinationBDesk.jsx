import React from 'react'
import NavBarDesk from '../NavBarDesk/NavBarDesk'
import NavBarDestinationD from '../NavBarDesk/NavBarDestinationD/NavBarDestinationD'
//assets
import data from '../../../assets/data.json'

function DestinationBDesk() {
    const destination = data.destinations ? data.destinations[1] : null;


    return (
        <div className='containerDestionationD'>
            <NavBarDesk />
            <div className="mainContentDestionationD">
                <div className="flexPD">
                    <p id='numDestinationD'>01</p>
                    <p id='destinationD'>PICK YOUR DESTINATION</p>
                </div>
                <div className="flexContentD">
                    <div className="imgContainerDD">
                        <img src={destination.images.png} alt={destination.name} />
                    </div>
                    <div className="divText">
                        <NavBarDestinationD />
                        <div className="textContainerDD">
                            <h2>{destination.name}</h2>
                            <p id='descriptionDestinationD'>{destination.description}</p>
                            <hr />
                            <div className="felxDateD">
                                <div className="flexDistanceD">
                                    <p>AVG. DISTANCE</p>
                                    <h3>{destination.distance}</h3>
                                </div>
                                <div className="felxTravelD">
                                    <p>EST TRAVEL TIME</p>
                                    <h3>{destination.travel}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationBDesk