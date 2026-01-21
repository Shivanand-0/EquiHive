import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../product/Hero';
import LeftSection from '../product/LeftSection';
import RightSection from '../product/RightSection';
import Universe from '../product/Universe';

function ProductPage() {
    return ( 
        <>
        <Hero />
        <LeftSection imgUrl="/media/images/kite.png" imgAlt="kite-img" 
        productName="Kite" 
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
        redirectUrl={{tryDemo:["#",'Try demo'],
        learnMore:["#",'Learn more'] ,
        googlePlay:"#", 
        appStore:"#"}}
         />
         <RightSection imgUrl="./media/images/console.png" imgAlt="console-img" 
        productName="Console" 
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
        redirectUrl={{
        learnMore:["#",'Learn more'] ,
        }}
         />
         <LeftSection imgUrl="/media/images/coin.png" imgAlt="coin-img" 
        productName="Coin" 
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
        redirectUrl={{tryDemo:["#",'Coin'],
        googlePlay:"#", 
        appStore:"#"}}
         />
         <RightSection imgUrl="./media/images/kiteconnect.png" imgAlt="kiteconnect-img" 
        productName="Kite Connect API" 
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
        redirectUrl={{tryDemo:["#",'Kite Connect'],
        }}
         />
         <LeftSection imgUrl="/media/images/varsity.png" imgAlt="varsity-img" 
        productName="Varsity mobile" 
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
        redirectUrl={{
        googlePlay:"#", 
        appStore:"#"}}
         />
         <h6 className='text-center text-muted fs-4'>Want to know more about our technology stack? Check out the <a href="#" className='text-decoration-none'>Zerodha.tech</a> blog.</h6>
        <Universe />
        <button type='button' className='btn btn-primary d-block mx-auto mb-5'><Link to="/signup" className='text-decoration-none text-white'>Sign up for free</Link></button>
        
        </>
     );
}

export default ProductPage;