import React from "react";
import { Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


function Login({ handleSetUser }){

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              username: e.target[0].value,
              password: e.target[1].value
           }),
        })
        .then((r) => {
            if(r.ok){
                r.json().then((user) => {
                    handleSetUser(user)
                })
            }
            else{
                alert("Wrong Password")
            }
        })
    }

    return(
        <div>
            <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center' block >
                        PotatoesPortal
                    </Header>
                    <Header as='h2' color='teal' textAlign='center' block >
                        Log-in to your account
                    </Header>
                    <Form size='large' onSubmit={handleSubmit}>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='UserName' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />

                            <Form.Button color='teal' fluid size='large'>
                                Login
                            </Form.Button>
                        </Segment>
                    </Form>
                    <Message>
                        Don't Have An Account? <a href='/signup'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}
export default Login