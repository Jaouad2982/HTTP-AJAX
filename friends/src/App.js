import React, { Component } from 'react';
import axios from "axios"
import {Route,Link} from "react-router-dom";
import List from "./component/List"
import Home from "./component/Home"
import Form from "./component/Form"
import Person from "./component/Person"
import './App.css';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        friendsList : [],
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

    addInfo = (e,info)=>{
      e.preventDefault();
      axios.post("http://localhost:5000/friends",info)
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }

    // addContentHandler = ()=>{
    //   const newProfile = {
    //       name : this.setState.name,
    //       age :this.state.age,
    //       email:this.state.age
    //   }

    //   this.setState({
    //     friendsList :[...this.state.friendsList, newProfile],
    //     name: " ",
    //     age :" ",
    //     email :" "
    //   })
    // }

    // changeHandler =(e)=>{
    //   e.preventDefault()
    //   this.setState({
    //     [e.target.name] : e.target.value
    //   })
    // }

  render() {
    return (
      <div className="App">
          <nav>
          <Link to="/">Home</Link> <br/>
          <Link to="/list">List of friends</Link> <br/>
          <Link to="/form">Form</Link>
          </nav>
          <Route path="/" exact component={Home}/>
          <Route path="/list" exact render={(props)=><List {...props} friendsList={this.state.friendsList} />} />
          <Route path="/form" exact render={(props)=><Form {...props} 
                                            fiendsList={this.state.friendsList} 
                                            addInfo={this.addInfo}
                                            />} />
          <Route path="/list/:id" exact render={(props)=> <Person  {...props} friendsList={this.state.friendsList} />} />
      </div>
    );
  }
}

export default App;
