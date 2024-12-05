import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import "./ToDo.css";
 function ToDo(){

    let [todos, setTodos] = useState([{task:"Sample Task", id:uuidv4(), isDone:false}]);
    let [newTodo, setNewTodo] = useState("");
    
    let addNewTask= ()=> {
      if (newTodo.trim() === "") {
        alert("Task cannot be empty. Please enter a task.");
        return;
    }
        setTodos([...todos, {task:newTodo, id:uuidv4(), isDone:false}]);
        setNewTodo("");
    }
    let updateTodoValue = (event)=> {
        setNewTodo(event.target.value);
    }
    let deleteTodo = (id)=> {
        setTodos(todos.filter(todo => todo.id != id));
    }

    let markAllDone = () => {
    setTodos((todos) =>
    todos.map((todo) => {
      return { ...todo, isDone:true };
    })
  );
};

let markAsDone = (id) => {
  setTodos((todos) =>
    todos.map((todo) => {
      if (todo.id === id){
      return { ...todo, isDone:true };
      }else{
        return todo;
      }
    })
  );
}
   return (
  <div className="container">
    <h1>ToDo List</h1>
    <input type="text" placeholder="Enter Tasks" value={newTodo} onChange={updateTodoValue} required /><br /><br />
    <button onClick={addNewTask}>Add Task</button>
    <hr />
    <h2>Tasks Todo</h2>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
        </li>
      ))}
    </ul>
    <button onClick={markAllDone}>Mark All Done</button>
  </div>
);
}

export default ToDo;
