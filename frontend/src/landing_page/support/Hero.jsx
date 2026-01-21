import React from 'react';

function Hero() {
    return (
        <>
            <div className="container" style={{ backgroundColor:'#e6e6e6'}}>
                <div className="row p-5" >
                    <div className='mb-5 d-flex d-flex justify-content-between'>
                        <a href="#" style={{textDecoration:'none'}}> <h1 className='fs-1'>Support Poral</h1></a>
                        <a href="#"> <h2 className='fs-4'>Track Tickets</h2></a>

                    </div>
                    <div className="col mt-4 ">
                        <h2 className='my-4'>Search for an answer or browse help topics to create a ticket</h2>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2 py-3" type="search" placeholder="Eg: how do i activate F&O, why is my order getting rejected .." aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className="d-flex d-flex justify-content-between my-4">
                            <a href="#">Track account opening </a>
                            <a href="#"> Track segment activation </a>
                            <a href="#">Intraday margins</a>
                            <a href="#"> Kite user manual</a>
                        </div>  
                    </div>
                    <div className="col  mt-4 ms-5">
                        <h2 className='my-4'>Featured</h2>
                        <ol style={{lineHeight:'2.5rem'}}>
                            <li><a href="#">Current Takeovers and Delisting - January 2024</a></li>
                            <li><a href="#">Latest Intraday leverages - MIS & CQ</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;