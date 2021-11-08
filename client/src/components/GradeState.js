import { useState, useEffect } from "react";
import { Button, Input } from 'semantic-ui-react'

export default function GradeState({ student, tagName }) {
    const [currentGrade, setCurrentGrade] = useState(0)
    const [currentSubjectId, setCurrentSubjectId] = useState(0)

    useEffect(() => {
        let classesId = 0;
        let grade = student.school_classes.map(element => {
            if (element.subject.toLowerCase() === tagName.toLowerCase()) {
                classesId = element.id
                return element.grade
            }
        }).filter(element => element)
        setCurrentGrade(grade)
        setCurrentSubjectId(classesId)
    }, [])

    function handleChange(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setCurrentGrade(e.target.value)
        }
    }

    function handleNewEdit() {
        fetch(`/school_classes/newGrade/${currentSubjectId}/${currentGrade}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                grade: currentGrade,
                id: currentSubjectId
            })
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then(() => {
                        alert("Successfully Updated")
                    })
                }
            })
    }

    return (
        <>
            <td data-label="Name">{`${student.first_name} ${student.last_name}`}</td>
            <td data-label="Grade">
                <Input placeholder={`Current Grade is ${currentGrade}`} onChange={handleChange} value={currentGrade} />
                <Button onClick={handleNewEdit}>Edit</Button>
            </td>
        </>
    )

}