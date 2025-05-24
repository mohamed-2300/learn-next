"use client"
import React, { useState , useEffect } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState({});
    useEffect( () => {
        async function fetchdata(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        setTodo(result);
        console.log(todo)
    }
    fetchdata()
    }, []
    )
    return(
        <div>
            {todo.id}
            {todo.title}
        </div>
    )
}

export default Todo;