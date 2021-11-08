import React from 'react';
import { Divider, Grid, Image, Segment } from "semantic-ui-react";

function Main(){
   
    return(
        <div className = "mainpage" >
            <h1 className="subjectheader">News:</h1>
            <Segment className = "bigsegment">
              <Grid columns={2}className = "segmentz">
                <Grid.Column>
                  <p>
                    <Image
                      className = "imagez"
                      href="http://i.qkme.me/3s5h07.jpg"
                      src="https://media4.giphy.com/media/p3huvYkhQDvgXTJVoO/giphy.gif?cid=790b7611e1dbda9b2125046c80e2e18c49ad32e302980826&rid=giphy.gif&ct=g"
                    />
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <h1 className = "newsheader">School Canceled</h1>
                  <a href="http://i.qkme.me/3s5h07.jpg" className="linktext">
                    Mayor declares that school is canceled tommorow due to poor weather.
                    The news came after weather reports indicated over six inches of
                    snow in the area
                  </a>
                </Grid.Column>
              </Grid>
              <Divider section />
            <Grid columns={2} className = "segmentz">
              <Grid.Column>
                <p>
                  <Image
                  className = "imagez"
                    href="https://www.cnn.com/2019/05/29/world/janitor-lottery-win-trnd/index.html"
                    src="https://media.cnn.com/api/v1/images/stellar/prod/190529104742-vito-halasan.jpg?q=x_2,y_0,h_898,w_1596,c_crop/h_720,w_1280"
                  />
                </p>
              </Grid.Column>
              <Grid.Column>
                <h1 className = "newsheader">Custodial Engineer Vito wins lottery!</h1>
                <a href="https://www.cnn.com/2019/05/29/world/janitor-lottery-win-trnd/index.html" className="linktext">
                  Congratulations to our very own Custodial Engineer Vito for
                  winning the lottery!
                </a>
                <p></p>
                <a href="https://www.cnn.com/2019/05/29/world/janitor-lottery-win-trnd/index.html" className="linktext">
                  Upon interview he was quoted as saying "up yours ya filthy
                  peasants!"
                </a>
              </Grid.Column>
            </Grid>

      <Divider vertical></Divider>
          </Segment>
          <h1 className="subjectheader">Clubs</h1>
          <Segment className = "bigsegment">
            <Grid columns={2} className = "segmentz">
              <Grid.Column>
                  <p>
                    <Image
                      className = "imagez"
                      src="https://cdn.thisiswhyimbroke.com/images/robotic-smart-chess-board-square-off.gif"
                    />
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <h1 className = "newsheader">Chess Club</h1>
                  <p className="linktext">
                  The chess club has decreed that all current members should create an
                  onlyfans account in order to show off their favorite mating positions
                  </p>
                </Grid.Column>
              </Grid>
          </Segment> 
          <br></br>
          <br></br>
          <br></br>
          <br></br>
                  
        </div>
    )
}

export default Main