import React, { useEffect, useState } from "react";
import styles from '../styles/Todo.module.css'
const todoData = [
  {
  
    text: 'this is sample todos',
    isDone: false,

  },
  {
    text: 'this is sample todos 22',
    isDone:true,
  
  }

];

const TodoList = () => {

  const [inputTodo, setInputTodo ] = useState('');
  const [todos, setTodos] = useState([]);
 
  useEffect(() => {

    setTodos(todoData)
    
  },[todoData])
 
    const handleChecked = (e, index) => {
      const checkTodo = [...todos];

      const checkStatus = e.target.checked;

      if(checkStatus){
        checkTodo[index].isDone = true

      }else{

        checkTodo[index].isDone = false

      }
      setTodos( checkTodo );
      
      console.log(e.target.checked);

  }

    const handleAddTodo = (e) => {

      e.preventDefault();
      
      const newtodo = {
        
        text: inputTodo,
        isDone: false,
        
      }
      const newTodoList = [...todos, newtodo ];
      setTodos( newTodoList );
      setInputTodo('')
    } 
   
    const handleRemove = (id) => {
     
     const todo = todos.filter( (todo, index ) => {
          return index !== id
      })

      setTodos(todo)
    }
    return(
      <>
        <div className="w-6/12 bg-stone-50 p-8 drop-shadow-lg">
          <h1 className="text-3xl mb-5"> TODO List</h1>
            <form onSubmit={handleAddTodo} className="mb-5 ">
              <div className="flex flex-start">
              <input
                placeholder="TodoList" 
                type="text" 
                value={inputTodo} 
                onChange={e => setInputTodo(e.target.value)}
                className="
                    shadow 
                    appearance-none 
                    border rounded 
                    w-full 
                    py-2 
                    px-3 
                    text-gray-900 
                    leading-tight 
                    focus:outline-none 
                    focus:shadow-outline
                    mr-3"
                />
              { 
                  inputTodo !== '' 
                  ? <button 
                      type="submit"
                      className="bg-violet-500 p-4 text-white drop-shadow-md rounded"> Add </button>
                  : <button type="submit" 
                      className="bg-violet-300 p-4 text-white rounded" disabled> Add </button>
              } 
              </div>
            </form>

          { todos.length >= 1 ? todos.map((todo, index) => (
            <div key={index}  className="flex my-2 justify-between items-center">
              <div className="">
                  <label  

                      style={{textDecoration:  todo.isDone ? 'line-through' : '', color: todo.isDone ? 'red' : '#444' }}

                      className={` ${styles.container}` }> {todo.text} 
                  <input
                    type="checkbox"

                    onChange={ (e) => handleChecked(e, index)}

                    checked={todo.isDone ? 'checked': ''}/>

                    <span className={styles.checkmark}></span>

                 </label>
               
                  </div>
                  <button 
                      className="bg-rose-500 px-2 text-white flex items-center"
                      style={{display: todo.isDone ? '' : 'none' }}
                      onClick={() => handleRemove( index ) }
                      > &#xd7; </button> 
                </div>
            ))
            : 'No todos '
            }
        </div>
        <div className="mt-5">
            <code className='bg-stone-900 text-orange-500 mt-7 p-1'> 
                <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="https://github.com/tablangdelio/worksheet/blob/main/pages/todolist.js"> 
                    https://github.com/tablangdelio/worksheet/blob/main/pages/todolist.js
                </a>
            </code>
        </div>
        </>
    )
}


export default  TodoList;