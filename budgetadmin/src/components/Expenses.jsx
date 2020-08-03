import React from 'react';
import Expenditure from './Expenditure';
import PropTypes from 'prop-types';
const Expenses = ({expenses}) => (
    <div className="gastos-realizados">
        <h2>Listados</h2>
        {
            expenses.map((expenditure)=>{
                return (
                    <Expenditure
                        key={expenditure.id}
                        expenditure={expenditure}
                    />

                    
                )
            })
        }

    </div>
)
 Expenses.propType= {
     expenses: PropTypes.array.isRequired
 }
export default Expenses;