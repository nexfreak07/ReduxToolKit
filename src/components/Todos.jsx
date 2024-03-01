import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
export default function Todos() {
  const [updatedTodo, setUpdatedTodo] = useState({});

  const changeHandler = (value, id)=>{
    setUpdatedTodo({...updatedTodo, [id]: value});
  }
  
 
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} 
         
          <button
            onClick={() => {
              dispatch(removeTodo(todo.id));
            }}
          >
            Remove
          </button>

          <input type="text" value={updatedTodo[todo.id] || ""} onChange={(e)=>changeHandler(e.target.value, todo.id)}/>
          <button onClick={()=>{
            dispatch(updateTodo([todo.id, updatedTodo[todo.id]]))
            setUpdatedTodo({...updateTodo, [todo.id]: ""})

          }}>Update Text</button>
          
        </li>
      ))}
    </div>
  );
}
