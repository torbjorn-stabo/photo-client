import React, { Component } from 'react';
import './SignupBox.css';
import FirebaseConfig from './../FirebaseConfig';

let firebase = require('firebase');
if (!firebase.apps.length) {
  firebase = firebase.initializeApp(FirebaseConfig);
}

class SignupBox extends Component {
  async login(event) {
    const email    = this.emailRef.current.value;
    const password = this.passwdRef.current.value;

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password); 
    } catch (error) {
        let err = error.message;
        console.log(err);
        this.setState({err: err});
    }

    document.getElementById('logout').classList.remove('hide');


    // firebase.auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then(user => {
    //         var lout = document.getElementById('logout');

    //         //Write a welcome message for user
    //         lout.classList.remove('hide');
    //     })
    //     .catch(e => {
    //         var err = e.message;
    //         console.log(err);
    //         this.setState({err: err});
    //     });
  }

  async signup(){
    const email    = this.emailRef.current.value;
    const password = this.passwdRef.current.value;
    
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            console.log(user);

            var err = "Welcome "+ user.email;
            firebase.database().ref('users/'+user.uid).set({
              email: user.email
            });
            this.setState({err: err});        
        })
        .catch(error => {
            let err = error.message;
            console.log(error);
            this.setState({err});              
        })
  }

  constructor(props){
    super(props);

    this.state = {
      err: ''
    };

    this.emailRef  = React.createRef();
    this.passwdRef = React.createRef();

    this.signup = this.signup.bind(this);
  }

  render(){
    return(
      <div className="signup">
        <input id="email" ref={this.emailRef} type="email" placeholder="Enter your email" />
        <input id="pass" ref={this.passwdRef} type="password" placeholder="Enter your password" />
        <p>{this.state.err}</p>
        <div className="buttons">
            <button onClick={this.signup}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default SignupBox;