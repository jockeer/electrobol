import React from 'react'

const Det = ({detalle}) => {
    return ( 
        <div className="detalle">
            <p>{detalle.id}</p>
            <p>{detalle.detalle}</p>
            <p>{detalle.fecha.substr(0,10)}</p>
        </div>
     );
}
 
export default Det;