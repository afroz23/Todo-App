import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
export default class TodoList extends Component {
    state={
        todos:[],
        todoToShow:"all",
        toggleAllComplete:true
    }
    addTodo=(todo)=>{
        this.setState({
            todos:[todo,...this.state.todos]
        });
    }
    toggleComplete=(id)=>{
        this.setState({
            todos:this.state.todos.map(todo=>{
                if(id===todo.id){
                    return {
                        ...todo,
                        complete:!todo.complete
                    }               
                }
                else{
                    return todo;
                }
            })
        });
    }
    updateTodoToShow=(s)=>{
        this.setState({
            todoToShow:s
        });
    }
    handleDeleteTodo=id=>{
        this.setState({
            todos:this.state.todos.filter(todo=>todo.id!==id)
        });
    }
    removeAllTodosThatAreComplete=()=>{
        this.setState({
            todos:this.state.todos.filter(todo=>!todo.complete)
        });
    }
    
    render() {
        let todos=[];
        if(this.state.todoToShow==="all"){
            todos=this.state.todos;
        }
        else if(this.state.todoToShow==="active"){
            todos=this.state.todos.filter(todo=>!todo.complete);
        }
        else if(this.state.todoToShow==="complete"){
            todos=this.state.todos.filter(todo=>todo.complete);
        }
        return (
            <div className="todo-list">
                <div>
                    <button onClick={()=>{this.updateTodoToShow("all")}}>all</button>
                    <button onClick={()=>{this.updateTodoToShow("active")}}>active</button>
                    <button onClick={()=>{this.updateTodoToShow("complete")}}>complete</button>
                    <button onClick={()=>
                        this.setState({
                            todos:this.state.todos.map(todo=>({
                                ...todo,
                                complete:this.state.toggleAllComplete
                            })),
                            toggleAllComplete:!this.state.toggleAllComplete
                        })
                        }
                    >
                        toggle all: {`${this.state.toggleAllComplete}`}</button>
                </div>
                <TodoForm onSubmit={this.addTodo}/>
                {todos.map(todo=>(
                    <Todo
                        key={todo.id}
                        toggleComplete={()=>{this.toggleComplete(todo.id)}}
                        todo={todo}
                        onDelete={()=>this.handleDeleteTodo(todo.id)}
                    />
                ))}
                <hr/>
                <div className="todos-left">
                    todos left: {this.state.todos.filter(todo=>!todo.complete).length}
                </div>
                {
                    (this.state.todos.some(todo=>todo.complete))?(<div>
                        <button onClick={this.removeAllTodosThatAreComplete}>romove all complete todos</button>
                    </div>):""
                }
            
            
            <div>
            </div>
            </div>
        );
    }
}
