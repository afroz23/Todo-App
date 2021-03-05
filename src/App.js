import React,{Component} from 'react';
import './App.css';
import Header from './Header';
import ListItems from './ListItems';

class App extends Component{
   constructor(props){
     super(props);
     this.state={
       items:[],
       currentItem:{
         text:'',
         key:''
       }
     }
   }

   handleInput=(e)=>{
     this.setState({
       currentItem:{
         text:e.target.value,
         key: Date.now()

       }
     })
   }

   addItem=(e)=>{
     e.preventDefault();
     const newItem=this.state.currentItem;
     if(newItem.text!==""){
       const newItems=[...this.state.items,newItem];
       this.setState({
         items:newItems,
         currentItem:{
           text:'',
           key:''
         }
       })
     }
   }

  deleteItem=(key)=>{
     const filteredItems=this.state.items.filter(item=>
      item.key!==key);
      this.setState({
        items:filteredItems
      })
    }
  
  setUpdate=(text,key)=>{
      const items=this.state.items;
      items.map(item=>{
        if(item.key===key){
          item.text=text;
        }
      });
      this.setState({
        items:items
      })
    }

  render(){
  return (
    <div className="App">
      <Header/>
      <header>
       <form id="to-do-form" onSubmit={this.addItem}>
         <input type='text' placeholder='Enter an item'
         value={this.state.currentItem.text}
         onChange={this.handleInput}/>
         <button type='submit'>Add</button>
       </form>
      </header>
      <ListItems items={this.state.items}
      deleteItem={this.deleteItem}
      setUpdate={this.setUpdate}></ListItems>
    </div>
  );
  }
}
export default App;

// Things that we can learn here:
// 1. How to add elements to the list
// 2. How to edit elements in the list
// 3. How to delete elements in the list