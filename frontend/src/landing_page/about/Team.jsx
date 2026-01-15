import React from 'react';

function Team() {
    return (
        <div className="containe">
            <div className="row p-5">
                <h3 className='text-center'>People</h3>
                <div className="col-5 p-5 pe-0">
                    <div className="div p-3 text-center">
                        <img src="/media/images/nithinKamath.jpg" alt="ceo img" style={{ borderRadius: '100%', width: '50%' }} />
                        <h5 className='mt-4'>Nithin Kamath</h5>
                        <p>CEO & Founder</p>
                    </div>
                </div>
                <div className="col-7 p-5">
                    <p className='text-muted pt-5 me-5'>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        <br />
                        <br />
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        <br />
                        <br />
                        Playing basketball is his zen.
                        <br />
                        <br />
                        Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;