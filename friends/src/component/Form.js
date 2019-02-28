import React from "react"
import "./List.css"

class Form extends React.Component {
 
        state = {
            info : {
                name : "",
                age :"",
                email:""
            }
        }

    render(){
    return (
        <div>
            <form className="form" onSubmit={this.props.addContent} >
            <input type="text" name="name" value={this.state.info.name} onChange={this.changeHandler} placeholder="Enter name" />
            <input type="number" name="age" value={this.state.info.age} onChange={this.changeHandler} placeholder="Enter your age" />
            <input type="text" name="email" value={this.state.info.email} onChange={this.changeHandler} placeholder="Enter your email" /> 
            <button type="submit" > Add </button>       
            </form>
        </div>

    )
    }
}

export default Form