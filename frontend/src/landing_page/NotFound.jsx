import React from 'react';

function NotFound() {
    return ( 
       <div className="container p-5" style={{height:"28rem"}}>
        <div className="row text-center">
            <h3>404 Page Not Found</h3>
            <p className='mt-4 mb-5'>Sorry, the page you are looking for does not exist.</p>
        </div>
       </div>
     );
}

export default NotFound;