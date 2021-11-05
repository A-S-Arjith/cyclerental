import * as firebase from "firebase";
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyCi1MI18BaUva1cVimd4AoMEhp1x_F4AG4",
  authDomain: "cycle-rental-1db77.firebaseapp.com",
  projectId: "cycle-rental-1db77",
  storageBucket: "cycle-rental-1db77.appspot.com",
  messagingSenderId: "312249315573",
  appId: "1:312249315573:web:bd01b496fc1345c6a115bc"
  };
 
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
