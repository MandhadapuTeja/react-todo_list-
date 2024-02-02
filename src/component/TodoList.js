import React, { useState } from 'react'
import "./TodoList.css"

function TodoList() {
    const[inputValue,setInputValue]=useState("");
    const[todos,setTodos] = useState([]);
    function handleInputChange(e) {
        setInputValue(e.target.value);
        //console.log(e.target.value);
    }
    const handleAddTodos=()=> {
        if(inputValue!== ""){
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false,
            };
          //  console.log(newTodo)
            setTodos([...todos,newTodo]);
            setInputValue("");
            console.log(todos)
        }
    }
    const handleToggleChange=(id)=>{
        console.log(id);
        const updatedTodos = todos.map((todo)=>{
            if(todo.id === id){
                return {...todo, completed:!todo.completed}
            }
            return todo;
        });

        setTodos(updatedTodos);
        console.log(updatedTodos)
    };
    const handleRemoveTodo=(id)=>{
        const filteredTodos = todos.filter((todo)=> todo.id !== id);
        console.log(filteredTodos);
        setTodos(filteredTodos);  
    };
  return (
    <div style={{marginTop:"10%"}}>
      <div className='todo-container'>
        <h1>Todo List</h1>
        <div className='todo-input'>
        <input type="text" value={inputValue} placeholder='Enter a List' onChange={handleInputChange}/>
        <button onClick={handleAddTodos}>Add</button>
        </div>

        <ul className='todo-list'>
            {todos.map((todo)=>(
                <li className={`todo-item  ${todo.completed===true ? "completed" : ""}`}> 
                <input type="checkbox" onChange={()=>handleToggleChange(todo.id)}/>
                    <span className='todo-text'>{todo.text}</span>
                    <button onClick={()=> handleRemoveTodo(todo.id)}>Remove</button>
                </li>
            ))}

        </ul>
      </div>
    </div>
  )
}

export default TodoList
