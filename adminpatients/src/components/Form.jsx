import React,{Fragment,useState} from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Form = ({CreateQuote})=> {
    //Crear State de Citas
    const [quote,setQuote] = useState({
        id:'',
        pet:'',
        owner:'',
        date:'',
        hour:'',
        symptoms:''
        
    });

    const [error,setError] = useState(false);

    //Functión que se ejecuta cda que el usuario escribe en un input
    const handleChange = (e) => {
    console.log(e.target.value);
    setQuote({
        ...quote,
        [e.target.name]: e.target.value
    })
    }

    //Extraer Valores
    const {pet,owner,date,hour,symptoms} = quote;

    const onSubmitQuote= (e) =>{
        e.preventDefault();
    
        //Validar Información
        if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || hour.trim() === '' ||symptoms.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        //Asignar un ID.
        quote.id = uuid();
        console.log(quote)
        //Crear Cita
        CreateQuote(quote);
        console.log('Agregando...')
        
        //Reiniciar form
        setQuote({
            pet:'',
            owner:'',
            date:'',
            hour:'',
            symptoms:''
        })

    }

    return (
       <Fragment>
           <h2>Crear Cita</h2>
           {error && <p className="alerta-error">Hay un error</p>}
           <form onSubmit={onSubmitQuote} >
               <label>Nombre Mascotas</label>
               <input 
                    type="text"
                    name="pet"  
                    className="u-full-width"             
                    placeholder="nombre mascota"
                    onChange={handleChange}
                    value= {pet}
               />
               <label>Nombre Dueño</label>
               <input 
                    type="text"
                    name="owner"  
                    className="u-full-width"             
                    placeholder="nombre dueño"
                    onChange={handleChange}
                    value={owner}
               />
                <label>Fecha </label>
               <input 
                    type="date"
                    name="date"  
                    className="u-full-width"             
                    onChange={handleChange}
                    value={date}
               />
                <label>Hora </label>
               <input 
                    type="time"
                    name="hour"  
                    className="u-full-width"          
                    onChange={handleChange}   
                    value={hour}
               />      
               <label>Sistomas</label>
               <textarea 
                    type="text"
                    name="symptoms"  
                    className="u-full-width"             
                    placeholder="Sistomas"
                    onChange={handleChange}
                    value={symptoms}
               />        
               <button  type="submit" className="u-full-width button-primary">
                   Agregar Cita</button>  
           </form>
       </Fragment>
    );
};

Form.propTypes = {
    CreateQuote: PropTypes.func.isRequired
}
export default Form;