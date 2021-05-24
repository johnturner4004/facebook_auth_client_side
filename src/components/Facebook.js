import React, { Component } from 'react'
import FacebookLoginBtn from 'react-facebook-login'
require('dotenv').config();

export default class LoginFacebook extends Component {
  state = {
    auth: false,
    name: '',
    picture: ''
  }

  componentClicked = () => {
    console.log('Facebook button clicked');
  }

  responseFacebook = (response) => {
    console.log(response);
  }

  render() {
    let facebookData;

    this.state.auth ?
      facebookData = ( 
      <div>
        Hi 
      </div>
      ) :
      facebookData = ( 
        <FacebookLoginBtn appId = "496510801780566"
        autoLoad = { true }
        fields = "name,email,picture"
        onClick = { this.componentClicked }
        callback = { this.responseFacebook }
        />
      )

    return ( 
      <>
        {facebookData}
      </>
    )
  }
}