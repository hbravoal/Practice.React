import React,{useState,useEffect} from 'react';
import Question from './components/Question';
import Form from './components/Form';
import Expenses from './components/Expenses';
import Budget from './components/Budget';

function App() {
  //Definir state
  const [budget,setBudget] = useState(0);
  const [remaining,setRemaining] = useState(0);
  //Pasar mostrar gastos.
  const [showQuestion,setShowQuestion]= useState(true);
  //Gastos
  const[expenses,setExpenses] = useState([]);

    const[expensiture,setExpensiture]= useState({});
    const [newExpensiture,setNewExpensiture] = useState(false);
  //Guardar Gastos

  useEffect(()=>{
    if(newExpensiture){
      //Agrega el nuevo presupuesto.
      setExpenses([
        ...expenses,
        expensiture
      ])
    }
    //Resta del presupuesto actual
    console.log(remaining);
    console.log('Entró')
    const residualBudget = remaining - parseInt(expensiture.quantity);
    setRemaining(residualBudget);
    setNewExpensiture(false);
    
  },[expensiture])


  return (
    <div className="container">
     <header>
       <h1>Gasto Semanal</h1>
       <div className="contenido-principal contenido">
         {
           showQuestion ?
              (<Question 
              setBudget= {setBudget}
              setRemaining = {setRemaining}
              setShowQuestion={setShowQuestion}
              />)
              : 
              (

                <div className="row">
                <div className="one-half column">
                  <Form                    
                    setExpensiture = {setExpensiture}
                    setNewExpensiture={setNewExpensiture}
                  />
                </div>
                <div className="one-half column">
                  <Expenses
                    expenses = {expenses}
                  />
                  <Budget
                    budget={budget}
                    remaining={remaining}
                    />

                </div>
      
              </div>
              )  
         }
       </div>
       
     </header>
    </div>
  );
}

export default App;
