import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCbQV0I21CRwkoXRGynGy3MFDfhBRsllLY",
    authDomain: "guesswut-249a5.firebaseapp.com",
    databaseURL: "https://guesswut-249a5.firebaseio.com",
    storageBucket: "guesswut-249a5.appspot.com",
  };

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
