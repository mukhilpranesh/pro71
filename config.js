import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAymi-ZUcE6Xc8LXPEY8FwCuNlVvmy4ViI",
    authDomain: "c42-pro-349f1.firebaseapp.com",
    databaseURL: "https://c42-pro-349f1-default-rtdb.firebaseio.com",
    projectId: "c42-pro-349f1",
    storageBucket: "c42-pro-349f1.appspot.com",
    messagingSenderId: "784261743288",
    appId: "1:784261743288:web:985ad79bea777165e32a4d"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
