import React, { useState } from "react";

import {useDispatch} from 'react-redux';

import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch()

  const changeHandler = (e) => {
    setInput(e.target.value);

    
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if(input.length>0){
      dispatch(addTodo(input))
    }
    // Here you can dispatch an action to add the todo with 'input' value
    setInput(""); // Reset the input after adding todo
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={input} onChange={changeHandler} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
}
