import React from 'react';
import PropTypes from 'prop-types';
//Gasto
const Expenditure = ({expenditure}) => {
    return (  
        <li className="gastos">
           <p>{expenditure.name}
                <span className="gasto" >
                    ${expenditure.quantity}
                </span>
           </p>
        </li>
    );
}
 
Expenditure.propTypes= {
    expenditure : PropTypes.object.isRequired
    
}
export default Expenditure;