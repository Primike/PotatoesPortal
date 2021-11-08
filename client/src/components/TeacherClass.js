import { useState, useEffect } from "react";
import Student from './Student'
import { Segment, Grid, Header, } from 'semantic-ui-react'
import GradeState from "./GradeState";
import HomeworksContainers from "./HomeworkContainer";

function TeacherClass({ user, tagName, subjects }) {
    const [students, setStudents] = useState([])
    const [studentsNoTeacher, setSNT] = useState([])
    const [currentUser, setCurrentUser] = useState({})


    useEffect(() => {
        fetch('/me').then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    fetch(`/${user.id}/students`)
                        .then(res => res.json())
                        .then(students => {
                            setStudents(students)
                        })
                    setCurrentUser(user)
                })
            }
        })
    }, [])

    useEffect(() => {
        fetch(`/students_without_teachers`)
            .then(res => res.json())
            .then(students => setSNT(students))
    }, [students])


    let studentsContainers = [];
    let newHomeworkHash = new Set()


    if (students.length !== 0) {
        let tempArray = []

        studentsContainers = students.map((student, index) => {
            return <tr><GradeState key={student.id + index} student={student} tagName={tagName} user={user} /></tr>
        })
        students.forEach((student, index) => {

            if (student.school_classes.length !== 0) {
                student.school_classes.forEach((classes) => {
                    if (classes.subject.toLowerCase() === tagName.toLowerCase()) {
                        tempArray = tempArray.concat(classes.homeworks)
                    }
                })
            }
        })

        tempArray.forEach((eachHomework) => {
            if (!newHomeworkHash.has(eachHomework)) {
                newHomeworkHash.add(eachHomework)
            }
        })
    }



    return (
        <div>
             <Grid className= "gridCustom">
                <Grid.Column width={6} className = "gridCustom2">
                        <Segment className= "studentGrades" >
                            <Header as='h1'>Students</Header>
                            <div className = "tablesContainer">
                                <table class="ui celled padded table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th >Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {studentsContainers}
                                    </tbody>
                                </table>
                            </div>
                            </Segment>
                    </Grid.Column>
                <Grid.Column width = {7}>
                    <Segment className="teacherStudentsTabHomework">
                        <Header as='h1'>Homework</Header>
                        <HomeworksContainers homeworks={newHomeworkHash} tagName={tagName} />
                    </Segment>
                </Grid.Column>
            </Grid>
            <Segment className="studentContainer">

                <h1 style={{ textAlign: "center" }}>Add Students to my class</h1>

                <div className="nestedStudentContainer">
                        {studentsNoTeacher.map((student, index) => (
                    <Student key={student + index} student={student} user={currentUser} setStudents={setStudents} subjects={subjects} />
                    ))}
                </div>

        </Segment>
        </div>

    )
}

export default TeacherClass