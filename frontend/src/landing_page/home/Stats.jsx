import React from 'react';

function Stats() {
    return ( 
        <>  
            <div className="container p-5 mt-5 mb-5" >
                <div className="row p-5" >
                    <h1 className="fs-2 text-muted">Trust with confidence</h1>
                    <div className="col-5">
                        <div className="mt-5">
                            <h2  className="fs-5 text-muted">Customer-first always</h2>
                            <p  className="text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                        </div>
                        <div className="mt-5">
                            <h2  className="fs-5 text-muted">No spam or gimmicks</h2>
                            <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#" style={{textDecoration:"None"}}>Our philosophies.</a> </p>
                        </div>
                        <div className="mt-5">
                            <h2  className="fs-5 text-muted">The Zerodha universe</h2>
                            <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        </div>
                        <div className="mt-5"> 
                            <h2  className="fs-5 text-muted">Do better with money</h2>
                            <p className="text-muted">With initiatives like <a href="#" style={{textDecoration:"None"}} >Nudge</a> and <a href="#" style={{textDecoration:"None"}}>Kill Switch</a> , we don't just facilitate transactions, but actively help you do better with your money</p>
                        </div>
                    </div>
                    <div className="col-7">

                        <img src="media/images/ecosystem.png" alt="stat Img" style={{width:"95%"}} className='ms-4' />

                        <div className="row mt-4">
                            <div className="col text-end"> 
                                <a href="#" style={{textDecoration:"None"}}>Explore our products <i class="fa fa-long-arrow-right"></i> </a>
                            </div>
                            <div className="col"> 
                                <a href="#" style={{textDecoration:"None"}}>Try Kite demo <i class="fa fa-long-arrow-right"></i> </a>
                            </div>
                        </div>

                    </div>
                </div>

                <img src="media/images/pressLogos.png" alt="Press Logo" className="mt-5"/>
            </div>
        </>
     );
}

export default Stats;