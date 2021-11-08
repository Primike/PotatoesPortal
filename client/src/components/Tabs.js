import React from 'react';
import { NavLink, useHistory } from "react-router-dom"
import { Menu, Segment, Header, Button } from 'semantic-ui-react'

function Tabs({handleLogout, user}) {

    let history = useHistory()

    function handleClick(){
        fetch('/logout', {
            method: 'DELETE'
        }).then(() => {
            handleLogout();
            history.push('/')
        })
    }
    

    return(
        <div className="header">
        <Segment style = {{marginBottom: '0px'}}>
       <div className="headerNameStuff"> 
            <Header as='h2'>PotatoesPortal</Header>
            <p style={{'font-size': '20px'}}>{`Hi, ${user.first_name}`}</p>
        </div>
       </Segment>
       <Menu style={{marginTop: '0px'}}>

           <Menu.Item>
               <NavLink exact to="/home"
               style={{ color: "grey" }}
               activeStyle={{fontWeight: "bold", color: "black"}}>
                   Home</NavLink>
           </Menu.Item>
           <Menu.Item>
               {user.is_teacher ? <NavLink to="/students"
               style={{ color: "grey" }}
               activeStyle={{fontWeight: "bold", color: "black"}}>
                   Students</NavLink> 
               : <NavLink to="/classes"
               style={{ color: "grey" }}
              activeStyle={{fontWeight: "bold", color: "black"}}>
                   Classes</NavLink>}
           </Menu.Item>
           {user.is_teacher ? 
           <Menu.Item>
               <NavLink to="/complaints"
               style={{ color: "grey" }}
               activeStyle={{fontWeight: "bold", color: "black"}}>
                   Complaints</NavLink>
           </Menu.Item> : null}
           <Menu.Item>
               <NavLink exact to="/profile"
               style={{ color: "grey" }}
               activeStyle={{fontWeight: "bold", color: "black"}}>
                   Profile</NavLink>
           </Menu.Item>
           
            <Button onClick={handleClick} style={{marginLeft: '1470px'}}> LOGOUT</Button>
       </Menu>
      
   </div>
    )
}

export default Tabs