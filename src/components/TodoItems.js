import React, { Component } from 'react'

export class TodoItems extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration : this.props.todo.completed ? 'line-through' :'none'   
        }
    }
    removedTitle = () => {
        return {
            background: 'Tomato',
            padding: '7px',
            borderRadius: '10%',
            float: 'right',
            marginRight: '20px' ,
            cursor: 'pointer'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={() => this.props.markComplete(id)} />{' '}
                    {title}
                <button style={this.removedTitle()} onClick={() => this.props.removeId(id)}>Delete</button>
                </p>
            </div>
        )
    }
}

export default TodoItems
