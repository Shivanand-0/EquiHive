import React from 'react';

function Brokrage() {
    return (
        <div className="container">
            <div className="row border-top pt-5">
                <div className="col-7">
                    <a href="#" style={{textDecoration:'none'}}><h2 className='text-center mb-4' >Brokerage calculator</h2></a>
                    <ul>
                        <li className='text-muted mb-2'>Call & trade and RMS auto-squareoff: Additional charges of &#8377;50 + GST per order. </li>
                        <li className='text-muted mb-2'>Digital contract notes will be sent via e-mail. </li>
                        <li className='text-muted mb-2'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply. </li>
                        <li className='text-muted mb-2'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li className='text-muted mb-2'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower). </li>
                        <li className='text-muted mb-2'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-5">
                    <a href="#" style={{textDecoration:'none'}}><h2 className='text-center mb-4' >List of charges</h2></a>
                </div>
            </div>
        </div>
     );
}

export default Brokrage;