import React from 'react';

function Hero() {
    return ( 
        <>
            <div className='container p-5 mt-3 mb-5'>
                <div className='row text-center'>
                    <img src="media/images/homeHero.png" alt='Hero Image' className='mb-5'></img>
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p>Online plateform to invest in stocks, derivatives, mutual funds and more.</p>
                    <button className='btn btn-primary fs-5' style={{width:'20%', margin:'0 auto'}}>Signup now</button>
                </div>

            </div>
        
        </>
        
     );
}

export default Hero;