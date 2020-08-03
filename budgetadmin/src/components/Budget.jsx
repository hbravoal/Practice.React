import React,{Fragment} from 'react';
import {CheckBudget} from '../helper';
import PropTypes from 'prop-types';
const Budget = ({remaining,budget}) => {
    return (  
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {budget}
            </div>
            <div className={CheckBudget(budget,remaining)}>
                Restante: $ {remaining}

            </div>
        </Fragment>

    );
}
Budget.propTypes = {
    remaining : PropTypes.number.isRequired,
    budget : PropTypes.number.isRequired
}
export default Budget;