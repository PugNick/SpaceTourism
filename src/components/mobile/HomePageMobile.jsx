import React from 'react'
import NavBarDesplegable from './NavBarMobile/NavBarDesplegable';
import { Link } from 'react-router-dom';

//estilos
import './HomePageMobile.css';


function HomePageMobile() {
	return (
		<div className='HomePageBackM'>
			<NavBarDesplegable />

			<div className="mainContent">
				<p>SO, YOU WANT TO TRAVEL TO</p>
				<h1>SPACE</h1>
				<p id='infoM'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
				<div className="buttonExploreM">
					<Link id='exploreM' to="/destino">EXPLORE</Link>
				</div>
			</div>
		</div>
	)
}
export default HomePageMobile