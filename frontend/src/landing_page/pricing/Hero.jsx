import React from 'react';

function Hero() {
    return (
        <>
            <div className="container p-5">
                <div className="hero-section text-center  border-bottom p-5">
                    <h1 className="hero-title fs-2 text-muted">Pricing</h1>
                    <p className="hero-subtitle fs-4 text-muted">Free equity investments and flat &#8377;20 intraday and F&O trades</p>
                </div>
                <div className="row p-5 mx-5 mt-5 ">
                    <div className="col-4">
                        <div className="row ">
                            <div className="w-75" style={{margin:"0 auto"}}><img src="media/images/pricing0.svg" alt="zero price img" /></div>
                            <div className="text-center">
                                <h4 className='mt-3 mb-4 fs-3'>Free equity delivery</h4>
                                <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="w-75" style={{margin:"0 auto"}}>
                                <img src="./media/images/intradayTrades.svg" alt="zero price img" />
                            </div>
                            <div className="text-center">
                                <h4 className='mt-3 mb-4 fs-3'>Intraday and F&O trades</h4>
                                <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="w-75" style={{margin:"0 auto"}}>
                                <img src="media/images/pricing0.svg" alt="zero price img" />
                            </div>
                            <div className="text-center">
                                <h4 className='mt-3 mb-4 fs-3'>Free direct MF</h4>
                                <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;