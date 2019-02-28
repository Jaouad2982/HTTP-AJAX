import React, { Component } from 'react';
import axios from "axios"
import {BrowserRouter as Router, Route} from "react-router-dom";
import List from "./component/List"
import Home from "./component/Home"
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
        email :" "
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
          <Route path="/" exact Component={Home}/>
          <Route path="/list" exact render={()=><List friendsList={this.state.friendsList} />} />
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
