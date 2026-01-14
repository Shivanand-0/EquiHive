// its like wrapper for all components in home page.

import React from 'react';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            <Footer/>
        </>
     );
}

export default HomePage;