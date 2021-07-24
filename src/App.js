import {React,Component} from 'react';
import TodoList from './Components/TodoList';
import './App.css';
import Contact from './Components/Contact';
export default class App extends Component{
  render(){
    return (
      <div className="App">
        <h1 className="header">Todo list</h1>
        <div className="todolist">
          <TodoList/>
        </div>
        <a className="github-repo" target="_blank" rel="noopener noreferrer" href="https://github.com/afroz23/Todo-App">Github Repo</a>
        <Contact/>
      </div>
    );
  }
}