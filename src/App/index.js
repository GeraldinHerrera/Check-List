
import React from 'react'
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


// localStorage.removeItem("TAREAS_V1");

// const defaultTodos = [
//   {text:'Hacer trabajos',completed:false},
//   {text:'Tomar Cursos',completed:false},
//   {text:'Tomar sopa',completed:true},
//   {text:'Otras cosas',completed:false},
//   {text:'Usar estados derivados',completed:true}
// ]

// localStorage.setItem('TAREAS_V1', JSON.
//   stringify(defaultTodos));

// localStorage.removeItem("TAREAS_V2");

function App() {

 return(
  <TodoProvider>
    <AppUI/>
  </TodoProvider>
 );
}

export default App;  

