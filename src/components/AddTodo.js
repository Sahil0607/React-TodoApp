import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    changeInput = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    submitValue = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.submitValue}>
                <input type="text" name="title" placeholder="Enter Title"
                 style={{flex: '10',padding: '5px'}} onChange={this.changeInput} value={this.state.title} />
                <input type="submit" value="Submit" style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddTodo
