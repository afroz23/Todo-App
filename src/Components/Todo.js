import React from 'react';
const Todo= (props)=>(
    <div className="todo">
        <div className="todo-text"
            style={{
                textDecoration: props.todo.complete?"line-through":""
            }}
            onClick={props.toggleComplete}
            >
            {props.todo.text}
        </div>
        <button className="delete-todo" onClick={props.onDelete}>x</button>
    </div>
);
export default Todo;