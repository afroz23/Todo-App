import {React,Component} from 'react';
import TodoList from './Components/TodoList';
import './App.css';
export default class App extends Component{
  render(){
    return (
      <div className="App">
        <h1 className="header">Todo list app</h1>
        <div className="todolist">
          <TodoList/>
        </div>
      </div>
    );
  }
}