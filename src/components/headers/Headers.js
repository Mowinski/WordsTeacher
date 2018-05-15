import React, { Component } from 'react';

import './Headers.css';

class Headers extends Component {
    render() {
        return (
            <h1 className="Headers-title">{this.props.title}</h1>
        )
    }
}


export default Headers;
