import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container">
            <div className="row p-5">
                <h2 className="my-5">To create a ticket, select a relevant topic</h2>
                <div className="col " style={{lineHeight:'3rem'}}>
                    <h2 className="my-5"><i class="fa-solid fa-circle-plus"></i> Account Opening</h2>
                    <a href="#" className="" style={{textDecoration:'none'}}>Online Account Opening</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Offline Account Opening</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Company, Partnership and HUF Account Opening</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>NRI Account Opening</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Charges at Zerodha</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Getting Started</a> <br />
                </div>
                <div className="col"  style={{lineHeight:'3rem'}}>
                    <h2 className="my-5"><i class="fa-solid fa-user"></i> Your Zerodha Account</h2>
                    <a href="#" className='' style={{textDecoration:'none'}}>Login Credentials</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Account Modification and Segment Addition</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>DP ID and bank details</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Your Profile</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Transfer and conversion of shares</a> <br />
                </div>
                <div className="col"  style={{lineHeight:'3rem'}}>
                    <h2 className="my-5"> <i class="fa-solid fa-chart-column"></i> Other Plateform</h2>
                    <a href="#" className='' style={{textDecoration:'none'}}>Margin/leverage, Product and Order types</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Kite Web and Mobile</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Trading FAQs</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Sentinel</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Kite API</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Pi and other platform</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>Stockreports+</a> <br />
                    <a href="#" className='' style={{textDecoration:'none'}}>GTT</a> <br />
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;