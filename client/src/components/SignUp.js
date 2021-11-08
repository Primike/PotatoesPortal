import React, { useState } from "react";
import { Button, Form, Grid, Header, Message, Segment, Checkbox } from 'semantic-ui-react'

function SignUp({handleSetUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [isTeacher, setIsTeacher] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
        first_name: firstName,
        last_name: lastName,
        is_teacher: isTeacher
      }),
    })
    .then((r) => r.json())
    .then((user) => {
        if(user.error){
            alert(user.exception)
        }
        else{
            handleSetUser(user)
        }
    });
  }
  function handleToggle(){
    setIsTeacher(!isTeacher)
  }
    return(
        <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center' block >
                        PotatoesPortal Sign Up
                    </Header>
                    <Form size='large' onSubmit={handleSubmit}>
                        <Segment stacked>
                            <Form.Input 
                            fluid icon='user' 
                            iconPosition='left' 
                            placeholder='UserName' 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                             <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Confirm Password'
                                type='password'
                                value={passwordConfirmation}
                                onChange={(e) => 
                                    {
                                        setPasswordConfirmation(e.target.value)
                                    }}
                            />
                            <Form.Input 
                                icon='user'
                                iconPosition='left'
                                placeholder='FirstName'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <Form.Input 
                                icon='user'
                                iconPosition='left'
                                placeholder='LastName'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <Checkbox toggle label='Teacher?' checked={isTeacher} onChange={handleToggle}/>
                            
                            <Button color='teal' size='large' type='submit'>
                                Sign Up
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                       Already Have An Account? <a href='/'>Login</a>
                    </Message>
                </Grid.Column>
        </Grid>
    )
}

export default SignUp