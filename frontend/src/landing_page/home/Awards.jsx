import React from 'react';

function Awards() {
    return ( 
        <>
            <div className="container mt-5">
                <div className='row text-center'>
                    <div className='col p-5'>
                        <img src="media/images/largestBroker.svg" alt=" Award Img" />  
                    </div>
                    <div className='col text-start p-5'>
                        <h1 className="mt-4">Largest stock broker in India</h1>
                        <p className="mt-3">2+ million Zerodha client contribute to over 15% of all retail order volume in India daily by trading and investing in:</p> 
                        <div className='row mb-3 mt-5'>
                            <div className='col'>
                            <ul>
                                <li><p>Future and options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div> 
                        <div className='col'>
                            <ul>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Government</p></li>
                            </ul>
                        </div>
                        </div> 
                        <img src="media/images/pressLogos.png" alt="Press Logo" style={{width:"95%"}} className="mt-1"/>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Awards;