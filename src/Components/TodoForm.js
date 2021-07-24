import React, { Component } from 'react'
import shortid from 'shortid';
export default class TodoForm extends Component {
    state={
        text:''
    }
    handleChange=event=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    handleSubmit=event=>{
        event.preventDefault();
        if(this.state.text!==''){
            this.props.onSubmit({
                id:shortid.generate(),
                text:this.state.text,
                complete:false
            });
        }
        this.setState({
            text:''
        });
    }
    render() {
        return (
            <form id="to-do-form" onSubmit={this.handleSubmit}>
                <input
                    name='text'
                    placeholder="todo..."
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Add todo</button>
            </form>
        );
    }
}
