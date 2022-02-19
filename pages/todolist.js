import React, { useEffect, useState } from "react";

const todoData = [
  {
  
    text: 'this is sample todos',
    isDone: false
  },
  {
    text: 'this is sample todos 22',
    isDone:true
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
        isDone: false
      }
      const newTodoList = [...todos, newtodo ];
      setTodos( newTodoList );
      setInputTodo('')
    } 
   
    const handleRemove = (id) => {
     
      console.log(id);
     const todo = todos.filter( (todo, index ) => {
          return index !== id
      })

      setTodos(todo)
    }
    return(
        <div className="main">
            <form onSubmit={handleAddTodo}>
              <input type="text" value={inputTodo} onChange={e => setInputTodo(e.target.value)}/>
              { 
                  inputTodo !== '' 
                  ? <button type="submit"> Add </button>
                  : <button type="submit" disabled> Add </button>
              } 
            </form>

          { todos.length >= 1 ? todos.map((todo, index) => (
            <div key={index}>

              <input
                type="checkbox"
                onChange={ (e) => handleChecked(e, index)}
                checked={todo.isDone ? 'checked': ''}
              />
          
                  <span
                      style={{textDecoration:  todo.isDone ? 'line-through' : ''  }}> 
                      {todo.text}
                  </span>

                  <button style={{display: todo.isDone ? '' : 'none' }}
                          onClick={() => handleRemove( index ) }> x </button> 
                    
                </div>
            ))
            : 'No todos '
            }
        </div>
    )
}


export default  TodoList;