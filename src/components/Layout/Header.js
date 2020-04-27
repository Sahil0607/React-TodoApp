import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>Todo List</h1>
                <Link style={linkStyle} to='/'>Home</Link> | 
                <Link style={linkStyle} to='/about'>About</Link>
            </header>
        )
    }
}
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

export default Header;
