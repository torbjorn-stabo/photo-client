const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

if (!firebase.apps.length) {
  const firebase = require('firebase').initializeApp(config);
}

// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// }

  // const firebase = require('firebase');
  
  // firebase.initializeApp(config);

export default firebase;