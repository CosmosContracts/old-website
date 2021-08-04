import React from 'react';
import Header from './Header';
import './index.css';
import Section1 from './Section1';
// import Player from './Player';
import logo1 from '../../assets/header/logo1.png';
// import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Roadmap from './Roadmap';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <img alt="logo1" className="logo1" src={logo1}/>
            <Header/>
            <Section1/>
            {/* <Player/> */}
            {/* <Section2/> */}
            <Section3/>
            <Section4/>
            <Section5/>
            { /*<Section6/> */ }
            { /* <Section7/> */ }
            <Roadmap />
            <Section8/>
        </div>
    );
};

export default Dashboard;
