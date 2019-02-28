import React from "react"
import "./List.css"

class Form extends React.Component {
 constructor(props){
     super(props);
        this.state = {
            info : {
                name : "",
                age :"",
                email:""
            }
        }
    }


      changeHandler = (e)=>{
          e.persist();
          e.preventDefault();
        this.setState(prevState => (
            {
            info: {
              ...prevState.info,
              [e.target.name]: e.target.value
            }
          }));
        }
    render(){
    return (
        <div>
            <form className="form" onSubmit={(e)=>{this.props.addInfo(e,this.state.info)}} >
            <input type="string" name="name" value={this.state.info.name} onChange={this.changeHandler} placeholder="Enter name" />
            <input type="number" name="age" value={this.state.info.age} onChange={this.changeHandler} placeholder="Enter your age" />
            <input type="string" name="email" value={this.state.info.email} onChange={this.changeHandler} placeholder="Enter your email" /> 
            <button type="submit" > Add </button>       
            </form>
        </div>

    )
    }
}

export default Form