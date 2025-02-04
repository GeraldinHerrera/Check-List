import './TodoCounter.css';
import {TodoContext} from '../TodoContext'
import React from 'react';

function TodoCounter(){
    const {
      completedTodos,
      totalTodos,
    } =  React.useContext(TodoContext);
    return(
      <div className="containerCounter">
     <h1 className = "TodoCounter">
      <span>
      Has completado {completedTodos} de {totalTodos} TODOs
      </span>
     </h1>
      </div>

    );
}


  export { TodoCounter }