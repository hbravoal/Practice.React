import React,{Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Question = ({setBudget,setRemaining,setShowQuestion}) => {

    const [quantity,setQuantity]= useState(0);
    const [error,setError] = useState(false);
    
    const handleInput = e => {
        setQuantity(parseInt(e.target.value,10));
    }
    const onSubmitQuantity = e => {        
        e.preventDefault();

        //Validar
        if(quantity<=0 ){
            setError(true);
            return;
        }
        //Si se pasa la validación
        setShowQuestion(false);
        setError(false);
        setRemaining(quantity);
        setBudget(quantity)
        
        
    }
    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error && <Error message="Presupuesto no válido."/>}
            <form 
            onSubmit={onSubmitQuantity}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleInput}
                    value={quantity}
                />
                <button                  
                type="submit" className="button-primary u-full-width" value="Definir tu presupuesto">
                    Definir tu presupuesto
                    </button>
            </form>
        </Fragment>
     );
}
Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemaining: PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired
 }
export default Question;