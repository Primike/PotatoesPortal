import React, { useState } from "react";
import { Table, Button } from 'semantic-ui-react'

function Class({claz}) {

    const [homeworks, setHomeworks] = useState(claz.homeworks)


    function handleClick(index){
        
        homeworks.splice(index,1)
        fetch(`/school_classes/${claz.id}`, {
         method: "PATCH",
         headers: {
           "Content-Type": "application/json",
           Accept: 'application/json'
         },
        body: JSON.stringify({
           homeworks: homeworks,
         }),
       })
         .then((r) => r.json())
         .then((x) => setHomeworks(x));
    }
    
    return(
        <div>
            <h1>Grade: {claz.grade}</h1>
            <Table celled fixed singleLine>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className = "tablez">Homeworks</Table.HeaderCell>
                        <Table.HeaderCell className = "tablez">Completed?</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {homeworks.map((classs, index) => (
                        <Table.Row>
                            <Table.Cell><h4 style={{ color: 'black', fontWeight: 'bold' }}>{classs}</h4></Table.Cell>
                            <Table.Cell><Button onClick = {() => handleClick(index)}>Yes</Button></Table.Cell>
                        </Table.Row>
                            ))}
                    </Table.Body>
                </Table>
        </div>
    )
}

export default Class