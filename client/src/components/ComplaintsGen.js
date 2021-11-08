import React from "react";
import { Segment, Divider, Grid, Image } from 'semantic-ui-react'

export default function ComplaintsGen({profilePic,complaint, name}){

    return(
        <div>
                <Grid padded>
                    <Grid.Column width={4}>
                        <Image size='medium' src={profilePic}/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Segment.Group>
                            <Segment>
                                <b>{name} Says:</b>
                                <p>
                                    {complaint}
                                </p>
                            </Segment>
                        </Segment.Group>
                        <Segment.Group>
                            
                        </Segment.Group>
                    </Grid.Column>
                </Grid>
                <Divider />
        </div>
    )
}
