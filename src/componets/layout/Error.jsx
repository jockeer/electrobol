import React from 'react';
const Error = ({mensaje}) => {
    return ( 
        <p className="alert alert-danger" >{mensaje}</p>
     );
}
 
export default Error;