import React, { Component } from 'react';
import UserForm from './components/UserForm';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    repos: null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    //console.log(user);
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
        .then((res) => {
          //console.log(res);
          const repos = res.data.public_repos;
          //console.log(repos);
          this.setState({ repos: repos })
        })
    } else return;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Repo Finder</h1>
        </header>
        <UserForm getUser={this.getUser} />
        {this.state.repos ? <p>Number of repos: {this.state.repos}</p>: <p>Please enter a username</p>}

      </div>
    );
  }
}

export default App;
