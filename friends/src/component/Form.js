import React from "react"
import "./List.css"

const Form =(props)=>{
    return (
        <div>
            <form className="form" onSubmit={props.addContent} >
            <input type="text" name="name" value={props.name} placeholder="Enter name" />
            <input type="text" name="age" value={props.age} placeholder="Enter your age" />
            <input type="text" name="email" value={props.email} placeholder="Enter your email" /> 
            <button type="submit" > Add </button>       
            </form>
        </div>

    )
}

export default Form