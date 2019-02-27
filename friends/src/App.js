import React, { Component } from 'react';
import axios from "axios"
import faker from "faker"
import List from "./component/List"
import './App.css';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        friendsList : [],
        name : " ",
        age : " ",
        email: " "
      }

    }


    componentDidMount =()=>{
      axios.get("http://localhost:5000/friends")
      .then(res=>{
        console.log(res)
          this.setState(
            {
              friendsList : res.data
            }
          )
      })
      .catch(err=>{

      })
    }

    addContentHandler = ()=>{
      const newProfile = {
          name : this.setState.name,
          age :this.state.age,
          email:this.state.age
      }

      this.setState({
        friendsList :[...this.state.friendsList, newProfile],
        name: " ",
        age :" ",
        email :" ",
        img : faker.avatar()
      })
    }

    changeHandler =(e)=>{
      e.preventDefault()
      this.setState({
        [e.target.name] : e.target.value
      })
    }

  render() {
    return (
      <div className="App">
          <List  friendsList = {this.state.friendsList} />
          <form onSubmit={this.addContentHandler} >
            <input type="text" name="name" placeholder="Enter name" />
            <input type="text" name="age" placeholder="Enter your age" />
            <input type="text" name="email" placeholder="Enter your email" /> 
  
            <button type="submit" > Add </button>       
          </form>
      </div>
    );
  }
}

export default App;
