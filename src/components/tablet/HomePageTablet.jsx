import React from 'react'
import NavBarTablet from './NavBarTablet/NavBarTablet'
import { Link } from 'react-router-dom'
//estilos
import './HomePageTablet.css';

function HomePageTablet() {
    return (
        <div className='HomePageBackT'>
            <NavBarTablet />
            <div className="mainContentT">
                <p id='travelT'>SO, YOU WANT TO TRAVEL TO</p>
                <h1>SPACE</h1>
                <p id='descriptionHomeT'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                <div className="containerExploreT">
                    <Link id='exploreT' to="/destinoT/a">EXPLORE</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePageTablet