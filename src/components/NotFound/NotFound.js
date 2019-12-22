import React from 'react';
import'../../App.css'

const NotFound = (props) => {
    return (
        <div className="notFoundParent" >
            <h1>Not Found</h1>
            <p>No match for<h3>{props.location.pathname}</h3> </p>

            
        </div>
    );
};

export default NotFound;