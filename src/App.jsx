import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Todo from './Todo';

function App() {

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        console.log('Start');
        axios.get('https://in3.dev/knygos/')
        .then(function (response) {
            console.log(response.data);
            setTodos(response.data);
        })
    }, []);

    
    return (<div className="todo-container">
        {todos.map((todo)=>(<Todo key={todo.id} 
                                    id={todo.id} 
                                    author={todo.author}
                                    img={todo.img}
                                    title={todo.title}
                                    price={todo.price}>
                                    </Todo>))}
            </div>);
    }
    
export default App;