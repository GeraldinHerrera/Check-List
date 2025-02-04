import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      
      <span  
      className={`Icon ${props.completed ? "Icon-check" : "Icon-uncheck"}`}
      onClick ={props.onComplete}
      >
      
      {props.completed ? (
       <img src="https://cdn-icons-png.flaticon.com/24/8215/8215539.png" alt="Completed" />
      ):(
       <img src="https://cdn-icons-png.flaticon.com/24/2866/2866302.png" alt="Incomplete" />
    
  )}

</span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick ={props.onDelete}>
         <img src="https://cdn-icons-png.flaticon.com/24/1828/1828843.png"/> 
      </span>

    </li>
  );
}

export { TodoItem };
  