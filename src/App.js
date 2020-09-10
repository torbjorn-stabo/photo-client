import React, { useState } from 'react';
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Person from './components/Person';

import { Route, Redirect, useLocation } from 'react-router';
import UserContext from './components/UserContext';

const logoutFunc = () => {
  console.log('logoutFunc(): Called');
  
};

function App() {
  const [activeUser, setActiveUser] = useState({});
  let redirect = '';

  const location = useLocation();

  const auth = () => {
    require('firebase').auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log('User is signed in.');
          console.log(user);

          setActiveUser(user);
        } else {
          console.log('No user is signed in.');
          
        }
      });          
  }

  auth();

  if (!activeUser && location.pathname!=='/') {
    redirect = '/';
  }
  // if (activeUser && location.pathname!=='/main') { // Redirect if path doesn't exist
  //   redirect = '/main';
  // }

  console.log('App:', activeUser);
  
  return (
    <UserContext.Provider value={{activeUser, logoutFunc}}>
      <div className="App">
        {redirect && <Redirect to={redirect}/>}
        <Route path="/"       component={Login} exact={true}/>
        <Route path="/signup" component={Signup}/>
        <Route 
          path="/main"    
          render={(props) => <Main {...props}/>}/>
        <Route
          path="/person"
          render={(props) => <Person {...props}/>}/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
