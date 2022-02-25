import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    response: {}
  };

  componentDidMount() {
    axios.get('/api/v1/say-something').then((res) => {
      const responseA = res.data;
      this.setState((oldState) => ({...oldState, responseA: res.data}));
    });
    axios.get('/api/v1/upload-files').then((res) => {
      const responseB = res.data;
      this.setState((oldState) => ({...oldState, responseB: res.data}));
    });

  }

  render() {
    return (
      <div className="App">
        <h1>Hello from the frontend!</h1>
        <h1>{this.state.response.body}</h1>
      </div>
    );
  }
}

export default App;