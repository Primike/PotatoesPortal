import { Card, Button, Image } from 'semantic-ui-react'

function Student({ student, user, setStudents, subjects }) {
    function addStudent(username){
        fetch(`/teacher/${user.id}/${username}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                teacher_id: user.id,
            }),
        })
        .then((r) => r.json())
        .then((students) => {
            setStudents(students)
        })
        createClasses(student.id)
    }
    
    function createClasses(id){
        subjects.forEach(subject =>{
           return fetch(`/classes/create`, {
                method: "POST", 
                headers: {
                    "Content-type": "application/json", 
                },
                body: JSON.stringify({
                    user_id: id, 
                    subject: subject, 
                    grade: 100
                }),
            
        }).then((r)=>r.json()).then((homework)=> {
            //console.log(homework)
        })
    })
    }
    
    return (
     <div className='studentCard'>
        <Card>

            <Image size='medium' src={`${student.avatar}`} />
            <Card.Content>
                <Card.Header>{`${student.first_name} ${student.last_name}`}</Card.Header>
            </Card.Content>
            <Button color ='teal' onClick={()=> addStudent(student.username)}>Add to your class</Button>

        </Card>
        </div>
    )
}

export default Student