import React, { Component } from 'react'
import TodoItems from './TodoItems';

class Todo extends Component {
    render() {
        return this.props.todo.map(todo => {
            return <TodoItems key={todo.id} 
                todo={todo} 
                markComplete={this.props.markComplete}
                removeId={this.props.removeId} />
        });
    }
}

export default Todo;