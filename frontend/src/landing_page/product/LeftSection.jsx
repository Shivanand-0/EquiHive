import React from 'react';

function LeftSection({ imgUrl, imgAlt, productName, productDescription,redirectUrl }) { //[tryDemo, learnMore, googlePlay, appStore]
    return (
        <>
            <div className="container p-5">
                <div className="row p-5">
                    <div className="col">
                        <img src={imgUrl} alt={ imgAlt} />
                    </div>
                    <div className="col" style={{ paddingLeft: "10rem",  marginRight: "5rem",
                        display:"flex", flexDirection:"column", justifyContent:"center"
                     }}>
                        <h2 className="fs-3 text-muted">{productName}</h2>
                        <p className="text-muted mt-4 ">{productDescription}</p>

                        <div className="row pt-4">
                            {redirectUrl.tryDemo && <div className="col">
                                <a href={redirectUrl.tryDemo[0]} className="me-4 ">{redirectUrl.tryDemo[1]} <i class="fa-solid fa-arrow-right"></i></a>
                            </div>}
                            {redirectUrl.learnMore&& <div className="col">
                                <a href={redirectUrl.learnMore[0]} className=" ">{redirectUrl.learnMore[1]}<i class="fa-solid fa-arrow-right"></i></a>
                            </div>}
                        </div>
                        <div className="row pt-4">
                            {redirectUrl.googlePlay&&<div className="col">
                                <a href={redirectUrl.googlePlay}><img src="./media/images/googlePlayBadge.svg" alt="Google Play Store" style={{ height: "40px", marginRight: "10px" }} /></a>
                            </div>}
                            {redirectUrl.appStore&&<div className="col">
                                <a href={redirectUrl.appStore}><img src="./media/images/appstoreBadge.svg" alt="Apple App Store" style={{ height: "40px" }} /></a>
                            </div>}
                        </div>
                        {/* <div className="row pt-4">
                            <div className="col">
                                <a href={tryDemo} className="me-4 ">Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                            <div className="col">
                                <a href={learnMore} className=" ">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col">
                                <a href={googlePlay}><img src="./media/images/googlePlayBadge.svg" alt="Google Play Store" style={{ height: "40px", marginRight: "10px" }} /></a>
                            </div>
                            <div className="col">
                                <a href={appStore}><img src="./media/images/appstoreBadge.svg" alt="Apple App Store" style={{ height: "40px" }} /></a>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftSection;