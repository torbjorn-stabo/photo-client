import React, { Component } from 'react';
import './LoginBox.css';
import FirebaseConfig from './../FirebaseConfig';

let firebase = require('firebase');
if (!firebase.apps.length) {
  firebase = firebase.initializeApp(FirebaseConfig);
}

class LoginBox extends Component {
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

    // this.setState({ redirect: "/main" });
    this.props.success();

    // document.getElementById('logout').classList.remove('hide');


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

    // TODO: redirect to /signup
    
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

  logout(){
    firebase.auth().signOut();
    document.getElementById('logout').classList.add('hide');
  }

  google(){
    console.log("I am in google method");

    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider);

    promise.then( result => {
      var user = result.user;
      console.log(result);
      firebase.database().ref('users/'+user.uid).set({
        email: user.email,
        name: user.displayName
      });

    });
    promise.catch(e => {
      var msg = e.message;
      console.log(msg);
    });

  }

  constructor(props){
    super(props);

    this.state = {
      err: ''
    };

    this.emailRef = React.createRef();
    this.passwdRef = React.createRef();

    this.login  = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.google = this.google.bind(this);
  }

  render(){
    return(
      <div className="loginbox">
        <input id="email" ref={this.emailRef} type="email" placeholder="Enter your email" />
        <input id="pass" ref={this.passwdRef} type="password" placeholder="Enter your password" />
        <p>{this.state.err}</p>
        <div className="buttons">
            <button onClick={this.login}>Log In</button>
            <button onClick={this.signup}>Sign Up</button>
            <button onClick={this.logout} id="logout" className="hide">Log out</button><br />
        </div>
      </div>
    );
  }
}

export default LoginBox;