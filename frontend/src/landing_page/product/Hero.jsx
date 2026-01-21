import React from 'react';

function Hero() {
    return ( 
        <>
            <div className="container p-5 border-bottom">
                <div className="hero-section text-center p-5">
                    <h1 className="hero-title fs-2 text-muted">Zerodha Products</h1>
                    <p className="hero-subtitle fs-4 text-muted">Sleek, modern, and intuitive trading platforms</p>
                    <p className='text-muted  mt-4'>Check out our <a href="#" style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
                </div>
            </div>
        </>
     );
}

export default Hero;