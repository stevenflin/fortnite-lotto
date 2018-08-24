import React from 'react';
import { Jumbotron, Button } from 'react-boostrap';

export default class IntroPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Jumbotron>
          <h1>
            The best platform for Fortnite betting
          </h1>
          <hr />
          <p>
            Make money, and have fun!
            Easy, quick, and safe betting for your favourite past time.
          </p>
          <Button>
            Get Started
          </Button>
        </Jumbotron>
      </div>
    )
  }
}
