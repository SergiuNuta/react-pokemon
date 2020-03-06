import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDKGVTynKs9OZTiEQr7oKO4zKbJUh6sB4E",
    authDomain: "react-pokemon.firebaseapp.com",
    databaseURL: "https://react-pokemon.firebaseio.com",
    projectId: "react-pokemon",
    storageBucket: "react-pokemon.appspot.com",
    messagingSenderId: "105878044474",
    appId: "1:105878044474:web:6da37cc0059cb4ebf45a03",
    measurementId: "G-56991ZHJTL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const firestore = firebase.firestore();

  export default firebase;