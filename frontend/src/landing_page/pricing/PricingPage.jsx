import React from 'react';
import Hero from './Hero';
import Brokrage from './Brokrage';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return ( 
        <>  
            <Hero />
            <OpenAccount/>
            <Brokrage/>
        </>
     );
}

export default PricingPage;