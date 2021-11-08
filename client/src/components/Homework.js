import { useState, useEffect } from "react";
import { Container, Button } from 'semantic-ui-react'


export default function Homework({homework, tagName, handleHomeworksCallback}){
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        fetch('/me').then((r) => {
            if(r.ok){
                r.json().then((user) => {
                    setCurrentUser(user)
                })
            }
        })
    }, [])


    function handleDelete(){
        fetch(`/users/student_list/${currentUser.id}/${tagName}`,{
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                deleted: homework
            })
        }
        ).then((r) => {
            if(r.ok){
                r.json().then((stuff) => {
                    handleHomeworksCallback(homework)
                })
            }
        })
    }

    return(
        <Container text className='eachHomework'>
            <div className = 'homeworkText'>
            <p  style={{
                'padding-right': '20px',
                'font-size':  'large',
            }}>{homework}</p>
            </div>
            <Button onClick= {handleDelete} size = 'mini'>X</Button>
        </Container>
        
    )

}