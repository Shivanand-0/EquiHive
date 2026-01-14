import React from 'react';

function Pricing() {
    return ( 
        <div className="container p-5">
            <div className="row">
                <div className="col-4">
                    <h2 className=''>Unbeatable pricing</h2>
                    <p className="mt-4">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#">See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-8 ">
                    <div className="row">
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6"><img src="media/images/pricing0.svg" alt="zero price img" />
                            </div>
                                <div className="col-6">
                                    <p> Free account opening</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                    <img src="media/images/pricing0.svg" alt="zero price img" />
                                </div>
                                <div className="col-6">
                                    <p> Free equity delivery and direct mutual funds</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6" >
                                    <img src="./media/images/intradayTrades.svg" alt="zero price img" />
                                </div>
                                <div className="col-6 text-start">
                                    <p>  Intraday and F&O</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Pricing;