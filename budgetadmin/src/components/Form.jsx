import React,{useState} from 'react';
import Error from './Error';
import shortid  from 'shortid';
import PropTypes from 'prop-types';
const Form = ({setExpensiture,setNewExpensiture}) => {
    //Save Gastos
        const [name,setName]=useState('');
        const [quantity,setQuantity]=useState(0);
        const [error,setError]= useState(false);
    //Save Gastos
    
    const handleSubmit=e =>{
        e.preventDefault();
        //Validar
        if(quantity<1 || isNaN(quantity)){
            setError(true);
            return;
        }
        if(name === ''){
            setError(true);
            return;
        }
        setError(false);
        //Construir gasto
        const expenditure = {
            name,
            quantity,
            id:shortid.generate()
        }
        
        setExpensiture(expenditure);
        setNewExpensiture(true);
        setName('');
        setQuantity(0);
    }
    return ( 
        <form>
            <h2>Agrega tus gastos aquí</h2>
            {error && <Error  message="Debe diligenciar campos válidos."/>}
            <div className="campo">
                <label >Nombre gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ejemplo: Transporte"
                    value ={name}
                    onChange={e=>setName(e.target.value)}
                    
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ejemplo: 300"
                    value={quantity}
                    onChange={e=>setQuantity(parseInt(e.target.value))}
                />
            </div>
            <input                  
                type="submit" className="button-primary u-full-width" value="Agregar Gasto"
                onClick={handleSubmit}
                    />
        </form>
     );
}
 Form.propTypes = {
    setExpensiture: PropTypes.func.isRequired,
    setNewExpensiture: PropTypes.func.isRequired
 }
export default Form;