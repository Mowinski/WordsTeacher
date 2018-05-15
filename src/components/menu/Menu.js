import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div>
                <h2>Menu</h2>
                <ul>
                    <li><Link to="/list/category">List category</Link></li>
                    <li><Link to="/add/category">Add category</Link></li>
                </ul>
            </div>
        )
    }
}


export default Menu;
