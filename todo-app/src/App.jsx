import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './AddTodo.jsx'
import Todos from './Todos.jsx'
import { useState } from 'react';


function App() {

  let [todoList, setTodo] = useState([{
    name: "Buy Everything",
    date: "Today"
  }, {
    name: "Repair bike",
    date: "today"
  }]);

  const updateTodo = (name, date) => {
    let updatedList = [...todoList, { name, date }];
    setTodo(updatedList);
  }

  const deleteTodo = (name) => {
    let updatedList = todoList.filter((todo) => todo.name != name)
    setTodo(updatedList);
  }

  return <>

    <div className="card m-5">
      <div className="card-body">
        <AddTodo addTodo={updateTodo}></AddTodo>
        {todoList.map((todo, index) => (<Todos todo={todo} deleteTodo={(deleteTodo)} key={index}></Todos>))}
      </div>
    </div>

  </>
}

export default App;
