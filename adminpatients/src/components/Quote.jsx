import React from 'react';

 const Quote = ({quote,DeleteQuote}) => {
     const {pet,owner,date,hour,symptoms} = quote;
    return (
        <div className="cita">
            <p> Mascota: <span>{pet}</span></p>
            <p> Dueño: <span>{owner}</span></p>
            <p> Fecha: <span>{date}</span></p>
            <p> Hora: <span>{hour}</span></p>
            <p> Sintomas: <span>{symptoms}</span></p>
            <button  
            className="button eliminar u-full-width"
            onClick= {()=> DeleteQuote(quote.id)}
            >
                Eliminar Cita &times;
            </button>
        </div>
    );
};
export default Quote;