import React from 'react'

const TodoList =(props)=>{
    props.array.map(todo =>{
        return(
        <div>
            <h2>{todo.todos}</h2>
            <h2>{todo.title}</h2> 
            <h2>Completed: {todo.completed}</h2>
            <h2>id: {todo._id}</h2> 
            <p>Description: {todo.description}</p>
            <h2>Price: {todo.price}</h2>  
        </div>
        )}    
    )
}
export default TodoList