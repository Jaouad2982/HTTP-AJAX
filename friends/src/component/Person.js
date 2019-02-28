import React from "react"


const Person = (props) =>{
    console.log(props.friendsList)
    const person = props.friendsList.find(p=> `${p.id}` === props.match.params.id);
    console.log(person);
    if(!person){
        return <div>Not valid</div>
    }
    return (
        <div>
      
        <div className="container">
            <div className="ui card ">
                <div className="content">
                  <a className="header">{person.name}</a>
                  <div className="meta">
                    <span className="date">age : {person.age}</span>
                  </div>
                  <div className="description">
                    <h4>{person.email}</h4>
                  </div>
                </div>
                
        </div>
       
      </div>
    
        </div>

    )
}

export default Person;