import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import {Modal} from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';



function AppUI(){
const {
  loading,
  error,
  searchedTodos,
  completeTodo,
  deleteTodo,
  openModal,
  setOpenModal,
} = React.useContext(TodoContext);

    return (
        <>
           <div className="Container">
             <TodoCounter/>
    
              <TodoSearch/>
              <TodoList>
                {loading && (
                <>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>
                </>
                )};
                {error && <TodosError/>}
    
                {(!loading && searchedTodos.lenght === 0) && <EmptyTodos/>}
  
                {searchedTodos.map(todos =>(
                 <TodoItem 
                  key={todos.text}
                  text={todos.text}
                  completed = {todos.completed}
                  onComplete = {() => completeTodo(todos.
                  text)}
                  onDelete = {() => deleteTodo(todos.
                  text)}
                />
                ))}
                </TodoList>
           <CreateTodoButton
              setOpenModal={setOpenModal}
           />

           {openModal && (
             <Modal>
               <TodoForm/>
             </Modal>
           )}

 
          
          </div>
        
        </>
      );
}

export {AppUI};

