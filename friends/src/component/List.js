import React from "react"
// import faker from "faker"
import {Link} from "react-router-dom"
import "./List.css"
const List = (props) =>{


    return (
        <div >
            {
                props.friendsList.map(friend=>
                    (
                      <Link to={`/list/${friend.id}`} key={friend.id}>
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
                      </Link>
                    )
                )
            }
        </div>
    )
}


export default List