import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import {
  Menu,
  Headers,
  Footer,
  ListCategory,
  AddCategory,
  MenuUserBlock
} from './components';

import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.checkUserState();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-Header"><Headers title="Words Teacher" /></header>
          <div className="App-Menu">
            <MenuUserBlock />
            <Menu />
          </div>
          <div className="App-Content">
            <Route path="/list/category" component={ListCategory}/>
            <Route path="/add/category" component={AddCategory}/>
          </div>
          <footer className="App-footer"><Footer /></footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
