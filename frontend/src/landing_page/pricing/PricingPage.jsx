import React from 'react';
import Hero from './Hero';
import Brokrage from './Brokrage';
import Navbar from '../Navbar';
import Footer from '../Footer';

function PricingPage() {
    return ( 
        <>  
            <Navbar/>
            <Hero />
            <Brokrage/>
            <Footer/>
        </>
     );
}

export default PricingPage;