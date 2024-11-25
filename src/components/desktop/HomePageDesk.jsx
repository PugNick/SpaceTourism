import React from 'react'
import NavBarDesk from './NavBarDesk/NavBarDesk'
import { Link } from 'react-router-dom'
//estilos
import './HomePageDesk.css';

function HomePageDesk() {
    return (
        <div className='HomePageBackD'>
            <NavBarDesk />
            <div className="mainContentD">
                <div className="centerTextEnd">
                    <div className="textContainer">
                        <p id='travelDesk'>SO, YOU WANT TO TRAVEL TO</p>
                        <h1>SPACE</h1>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                </div>
                <div className="buttonExploreD">
                    <Link id='exploreDesk' to="/destinoD/a">EXPLORE</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePageDesk