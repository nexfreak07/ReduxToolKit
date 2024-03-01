import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import {Provider} from 'react-redux'
import { store } from './app/store'
import Todos from './components/Todos'

function App() {

  return (
   <>
      <Provider store={store}>
        <h1>Todo List</h1>
        <AddTodo />
        <Todos />
    </Provider>
    </> 
  );
}

export default App;
