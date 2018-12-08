import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import MenuList from './components/MenuList';
import { Container, } from "semantic-ui-react";

class App extends Component {
  state = { menus: [] };

  componentDidMount() {
    axios.get('/api/menus')
      .then( res => {
        this.setState({ menus: res.data });
      });
  };//end of componentDidMount

  render() {
    let { menus } = this.state;
    return (
    <div>
      <MenuList menus={menus} />
    </div>
    );//end of return
  };//end of render
};//end of class App

export default App;
