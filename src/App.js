import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  // constructor(props){
  //   super(props); // ensures react works

  //   //local state
  //   this.state = {
  //     user : {
  //       name: 'Ryan',
  //       job: ''
  //     }
  //   }  // prob be empty on load
  // }
  state = {
    user: {
      name: '',
      job: '',
      salary: 0
    }
  }
  handleChangeFor = (propertyName) => { // 'name'
    return (event) => {
      this.setState(
        {
          user: {
            ...this.state.user,
            [propertyName] : event.target.value
          }
        }
      )
    }
  }

  handleClick = (event) =>{
    console.log('i am being click', this.state);
  }
  render() {
    return (
      <div>
        <h1>Local State</h1>
        <input type='text' onChange={this.handleChangeFor('name')}/>
        <input type='text' onChange={this.handleChangeFor('job')}/>
        <input type='number' onChange={this.handleChangeFor('salary')}/>
        <button onClick={this.handleClick}>Click Me</button>
        <p>the user is: {this.state.user.name} and his job is {this.state.user.job} with a salary of {this.state.user.salary}</p> 
      </div>
    );
  }
}

export default App;
