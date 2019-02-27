import React from "react"
// import faker from "faker"
import "./List.css"
const List = (props) =>{

    return (
        <div >
            {
                props.friendsList.map(friend=>
                    (
                      <div className="container">
                        <div key={friend.id} >
                            <div className="ui card ">
                                <div className="content">
                                  <a className="header">{friend.name}</a>
                                  <div className="meta">
                                    <span className="date">age : {friend.age}</span>
                                  </div>
                                  <div className="description">
                                    <h4>{friend.email}</h4>
                                  </div>
                                </div>
                            </div>           
                        </div>
                      </div>
                    )
                )
            }
        </div>
    )
}


export default List