import React, { useState, useEffect } from "react";
import ComplaintsGen from "./ComplaintsGen";
import { Segment, Image } from 'semantic-ui-react'

function Complaints() {
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
            fetch('/me').then((r) => {
                if(r.ok){
                    r.json().then((stuff) => {
                        console.log(stuff)
                        setUserInfo(stuff)
                    })
                }
            })
    }, [])

    let complaintsContainers = []

    if (userInfo["is_teacher"]){
        complaintsContainers = userInfo['complaints'].map((element, index)=>{
           return (<ComplaintsGen key={index+element} index = {index} complaint= {element.complaint} name={element.name} profilePic={"https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"}/>)
        })
    }
    else{
        return (
            <Segment loading>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
        )
    }
    
    return(
        <Segment basic className = "complaintsContainerSegment">
            {complaintsContainers}
        </Segment>
    )
}

export default Complaints