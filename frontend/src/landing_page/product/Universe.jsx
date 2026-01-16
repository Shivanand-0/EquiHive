import React from 'react';

function Universe() {
    return ( 
        <>
            <div className="contener">
                <div className="row p-5 text-center">
                    <h2 className='text-muted'>The Zerodha Universe</h2>
                    <p className='text-muted mt-4 mb-5 fs-5'>Extend your trading and investment experience even further with our partner platforms</p>
                    <div className="row p-5">
                        <div className="col">
                            <img src="./media/images/zerodhaFundhouse.png" alt="" className='w-50 mb-4' />
                            <p>
                                Our asset management venture 
                                <br />
                                that is creating simple and transparent index 
                                <br />
                                funds to help you save for your goals.
                            </p>
                        </div>
                        <div className="col">
                            <img src="./media/images/sensibullLogo.svg" alt="" className='w-75 mb-4' />
                            <p>
                                Our asset management venture 
                                <br />
                                that is creating simple and transparent index 
                                <br />
                                funds to help you save for your goals.
                            </p>
                        </div>
                        <div className="col">
                            <img src="./media/images/tijori-logo.png" alt="" className='w-50 mb-4'/>
                            <p>
                                Our asset management venture 
                                <br />
                                that is creating simple and transparent index 
                                <br />
                                funds to help you save for your goals.
                            </p>
                        </div>
                    </div>
                    <div className="row p-5">
                        <div className="col">
                            <img src="./media/images/streakLogo.png" alt="" className='w-50 mb-4' />
                            <p>
                                Systematic trading platform 
                                <br />
                                that allows you to create and backtest  
                                <br />
                                strategies without coding.
                            </p>
                        </div>
                        <div className="col">
                            <img src="./media/images/smallcaseLogo.png" alt="" className='w-75 mb-4' />
                            <p>
                                Thematic investing platform  
                                <br />
                                that helps you invest in diversified  
                                <br />
                                baskets of stocks on ETFs.
                            </p>
                        </div>
                        <div className="col">
                            <img src="./media/images/dittoLogo.png" alt="" className='w-50 mb-4'/>
                            <p>
                                Personalized advice on life  
                                <br />
                                and health insurance. No spam  
                                <br />
                                and no mis-selling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Universe;