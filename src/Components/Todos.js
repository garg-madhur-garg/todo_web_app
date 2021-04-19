import React from 'react'
import Todoitem from './Todoitem'


function Todos(props) {

    let myStyle = {
        minHeight: "70vh",
        margin: "10px auto"
    }
    return (
        <div className="myContainer text-center" style={myStyle}>
            <h3 className="my-3 py-3">ToDos List</h3>
            {props.todos.length === 0 ? "No todos for display" : 
            props.todos.map((todo)=> {
                return(
                 <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                )
            })
            }
            
        </div>
    )
}

export default Todos
