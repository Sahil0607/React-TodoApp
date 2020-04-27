import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import Todo from './components/Todo';
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo';
import { Route, BrowserRouter } from 'react-router-dom';
import About from './components/Pages/About'; 
import uuid from 'uuid';

export class App extends Component {
  state = {
    todo : []
    }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(resp => this.setState({todo: resp.data}));
  }
  

  markComplete = (id) => {
    const newTodo = this.state.todo.map(todo => {
      if(id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todo: newTodo});
  }


  removeTitle = (id) => {
    const newTodo = this.state.todo.filter(todo => {
      return todo.id !== id
    });
    this.setState({todo: newTodo});
  }


  addTitle = (title) => {
    const newTodo = {
      id: uuid,
      title: title,
      completed: false
    }
    axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
      .then(resp => this.setState({todo: [...this.state.todo, resp.data]}));
  }
  render() {
    return (
    <BrowserRouter>
      <div className="App"> 
        <Header />
        <Route path="/" exact render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTitle} />
            <Todo todo={this.state.todo} 
            removeId={this.removeTitle}
            markComplete={this.markComplete} />
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
        
      </div>
    </BrowserRouter>
    )
  }
}


export default App