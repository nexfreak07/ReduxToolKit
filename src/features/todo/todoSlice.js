import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanodi generates unique id's

//Now create iniial state

const iniialState = {
  todos: [{ id: 1, text: "Go to market" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: iniialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
        
    removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo)=> (todo.id !== action.payload))

    },

    updateTodo : (state, action) => {
        const [id, text] = action.payload
        const updatedTodo = state.todos.map((todo) => todo.id === id ? {...todo, text: text} : todo)
        state.todos = updatedTodo
    }
  }, // In reducers we have properties and function
});


// Exporting the reducer individually

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions


// Also we need to make out store aware about our reducers so we export the reducer as well

export default todoSlice.reducer; // As we are exporting the reducer directly we can import todoReducer directly in our store