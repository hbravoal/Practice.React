import React,{Fragment, useState} from 'react';
import Form from './components/Form';
import Quotes from './components/Quote';

function App() {
  const [quotes,SetQuotes] = useState([]);
  //Función que tome las citas actuales y agrega la nueva

  const CreateQuote= quote => {
    console.log(quote);
    SetQuotes([
      ...quotes,
      quote

    ])
  }
  const DeleteQuote = quoteId => {
    const newQuotes = quotes.filter((quote)=> quote.id !==quoteId)
    SetQuotes(newQuotes);
  } 
  const title = quotes.length > 0  ? "Administra tus citas" : "No hay citas";

  return (
    <Fragment>
      <div className="container">        
        <div className="row">
          <div className="one-half column">
            <Form CreateQuote={CreateQuote}></Form>
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            { 
              quotes.map((quote)=>(
                 <Quotes 
                  key={quote.id}
                  quote={quote}
                  DeleteQuote= {DeleteQuote}

                 >

                </Quotes>
              ))
            }
          </div>

      

        </div>
      

      </div>
    </Fragment>
  );
}

export default App;
