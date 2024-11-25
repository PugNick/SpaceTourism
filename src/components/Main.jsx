import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

//rutas para dispositivos 
import HomePageDesk from './desktop/HomePageDesk';
import HomePageTablet from './tablet/HomePageTablet';
import HomePageMobile from './mobile/HomePageMobile';

//rutas para destination mobile
import DestinationAMobile from './mobile/DestinationMobile/DestinationAMobile';
import DestinationBMobile from './mobile/DestinationMobile/DestinationBMobile';
import DestinationCMobile from './mobile/DestinationMobile/DestinationCMobile';
import DestinationDMobile from './mobile/DestinationMobile/DestinationDMobile';

//rutas para destination tablet
import DestinationATablet from './tablet/DestinationTablet/DestinationATablet';
import DestinationBTablet from './tablet/DestinationTablet/DestinationBTablet';
import DestinationCTablet from './tablet/DestinationTablet/DestinationCTablet';
import DestinationDTablet from './tablet/DestinationTablet/DestinationDTablet';

//rutas para destination desk
import DestinationADesk from './desktop/DestinationDesk/DestinationADesk';
import DestinationBDesk from './desktop/DestinationDesk/DestinationBDesk';
import DestinationCDesk from './desktop/DestinationDesk/DestinationCDesk';
import DestinationDDesk from './desktop/DestinationDesk/DestinationDDesk';

//rutas para crew mobile
import CrewAMobile from './mobile/CrewMobile/CrewAMobile';
import CrewBMobile from './mobile/CrewMobile/CrewBMobile';
import CrewCMobile from './mobile/CrewMobile/CrewCMobile';
import CrewDMobile from './mobile/CrewMobile/CrewDMobile';

//rutas para crew tablet
import CrewATablet from './tablet/CrewTablet/CrewATablet';
import CrewBTablet from './tablet/CrewTablet/CrewBTablet';
import CrewCTablet from './tablet/CrewTablet/CrewCTablet';
import CrewDTablet from './tablet/CrewTablet/CrewDTablet';

//rutas para crew desk
import CrewADesk from './desktop/CrewDesk/CrewADesk';
import CrewBDesk from './desktop/CrewDesk/CrewBDesk';
import CrewCDesk from './desktop/CrewDesk/CrewCDesk';
import CrewDDesk from './desktop/CrewDesk/CrewDDesk';

//rutas para technology mobile
import TechnologyAMobile from './mobile/TechnologyMobile/TechnologyAMobile';
import TechnologyBMobile from './mobile/TechnologyMobile/TechnologyBMobile';
import TechnologyCMobile from './mobile/TechnologyMobile/TechnologyCMobile';

//rutas para technology tablet
import TechnologyATablet from './tablet/TechnologyTablet/TechnologyATablet';
import TechnologyBTablet from './tablet/TechnologyTablet/TechnologyBTablet';
import TechnologyCTablet from './tablet/TechnologyTablet/TechnologyCTablet';

//rutas para technology desk
import TechnologyADesk from './desktop/TechnologyDesk/TechnologyADesk';
import TechnologyBDesk from './desktop/TechnologyDesk/TechnologyBDesk';
import TechnologyCDesk from './desktop/TechnologyDesk/TechnologyCDesk';

function Main() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1024);
        setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        isDesktop
                            ? <HomePageDesk />
                            : isTablet
                                ? <HomePageTablet />
                                : <HomePageMobile />
                    }
                />
                {/* Destination Routes */}
                <Route
                    path="/destino"
                    element={
                        isDesktop
                            ? <Navigate to="/destinoD/a" />
                            : isTablet
                                ? <Navigate to="/destinoT/a" />
                                : <Navigate to="/destinoM/a" />
                    }
                />
                <Route
                    path="/destino/:subpage"
                    element={
                        isDesktop
                            ? <Navigate replace to="/destinoD/:subpage" />
                            : isTablet
                                ? <Navigate replace to="/destinoT/:subpage" />
                                : <Navigate replace to="/destinoM/:subpage" />
                    }
                />
                <Route path="/destinoM/a" element={<DestinationAMobile />} />
                <Route path="/destinoM/b" element={<DestinationBMobile />} />
                <Route path="/destinoM/c" element={<DestinationCMobile />} />
                <Route path="/destinoM/d" element={<DestinationDMobile />} />
                <Route path="/destinoT/a" element={<DestinationATablet />} />
                <Route path="/destinoT/b" element={<DestinationBTablet />} />
                <Route path="/destinoT/c" element={<DestinationCTablet />} />
                <Route path="/destinoT/d" element={<DestinationDTablet />} />
                <Route path="/destinoD/a" element={<DestinationADesk />} />
                <Route path="/destinoD/b" element={<DestinationBDesk />} />
                <Route path="/destinoD/c" element={<DestinationCDesk />} />
                <Route path="/destinoD/d" element={<DestinationDDesk />} />

                {/* Crew Routes */}
                <Route
                    path="/equipo"
                    element={
                        isDesktop
                            ? <Navigate to="/equipoD/a" />
                            : isTablet
                                ? <Navigate to="/equipoT/a" />
                                : <Navigate to="/equipoM/a" />
                    }
                />
                <Route
                    path="/equipo/:subpage"
                    element={
                        isDesktop
                            ? <Navigate replace to="/equipoD/:subpage" />
                            : isTablet
                                ? <Navigate replace to="/equipoT/:subpage" />
                                : <Navigate replace to="/equipoM/:subpage" />
                    }
                />
                <Route path="/equipoM/a" element={<CrewAMobile />} />
                <Route path="/equipoM/b" element={<CrewBMobile />} />
                <Route path="/equipoM/c" element={<CrewCMobile />} />
                <Route path="/equipoM/d" element={<CrewDMobile />} />
                <Route path="/equipoT/a" element={<CrewATablet />} />
                <Route path="/equipoT/b" element={<CrewBTablet />} />
                <Route path="/equipoT/c" element={<CrewCTablet />} />
                <Route path="/equipoT/d" element={<CrewDTablet />} />
                <Route path="/equipoD/a" element={<CrewADesk />} />
                <Route path="/equipoD/b" element={<CrewBDesk />} />
                <Route path="/equipoD/c" element={<CrewCDesk />} />
                <Route path="/equipoD/d" element={<CrewDDesk />} />

                {/* Technology Routes */}
                <Route
                    path="/tecnologia"
                    element={
                        isDesktop
                            ? <Navigate to="/tecnologiaD/a" />
                            : isTablet
                                ? <Navigate to="/tecnologiaT/a" />
                                : <Navigate to="/tecnologiaM/a" />
                    }
                />
                <Route
                    path="/tecnologia/:subpage"
                    element={
                        isDesktop
                            ? <Navigate replace to="/tecnologiaD/:subpage" />
                            : isTablet
                                ? <Navigate replace to="/tecnologiaT/:subpage" />
                                : <Navigate replace to="/tecnologiaM/:subpage" />
                    }
                />
                <Route path="/tecnologiaM/a" element={<TechnologyAMobile />} />
                <Route path="/tecnologiaM/b" element={<TechnologyBMobile />} />
                <Route path="/tecnologiaM/c" element={<TechnologyCMobile />} />
                <Route path="/tecnologiaT/a" element={<TechnologyATablet />} />
                <Route path="/tecnologiaT/b" element={<TechnologyBTablet />} />
                <Route path="/tecnologiaT/c" element={<TechnologyCTablet />} />
                <Route path="/tecnologiaD/a" element={<TechnologyADesk />} />
                <Route path="/tecnologiaD/b" element={<TechnologyBDesk />} />
                <Route path="/tecnologiaD/c" element={<TechnologyCDesk />} />

                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </Router>
    );
}

export default Main;
