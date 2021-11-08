import React, { useState, useEffect } from "react";
import Class from './Class'
import { Button, Tab, Form } from 'semantic-ui-react'

function Classes({ user }){

    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('/me').then((r) => {
                if(r.ok){
                    r.json().then((user) => {
                        fetch(`/${user.id}/classes`).then((r) => {
                            if(r.ok){
                                r.json().then((x) => {
                                    setClasses(x)
                                    
                                })
                            }
                        })
                    })
                }
            })
    }, [])

    let newTabRender = [];


    classes.map((claz, index) => {
        newTabRender.push({menuItem: claz.subject, render: () => <Tab.Pane> <Class key={claz.subject + index} claz = {claz}/> </Tab.Pane>})
    })
   
    const [name, setName] = useState("")
    const [complaint, setComplaint] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/complaints/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user.teacher_id,
            name: name,
            complaint: complaint,
          }),
        })
        .then((resp) => resp.json())
          .then((x) => {
            alert("Complaint Logged")
            console.log(x)
            setComplaint('')
            setName('')
          });
    }
    return(    
        <div className = 'studentclasses'>
            <div className = "thetabs">
                <Tab panes={newTabRender} />
            </div>
            <div className = "complaintsbox">
            <h1 className="complaintz">Complaints/Comments:</h1>
            <Form onSubmit={handleSubmit} className = "theform">
                <Form.Field>
                <label className = "textlabel">Name:</label>
                <input 
                    placeholder='' 
                    type="text" 
                    name="name" 
                    value = {name} 
                    onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label className = "textlabel">Comment:</label>
                <input 
                    placeholder='' 
                    type="text" 
                    name="complaint" 
                    value = {complaint} 
                    onChange={(e) => setComplaint(e.target.value)}/>
                </Form.Field>
                
                <Button type='submit'>Submit</Button>
            </Form>
            </div>
        </div>        
    )
}


export default Classes