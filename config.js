import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyBVgVB01xqY71lC9z1yBvaedwOLzFqH-Lw",
    authDomain: "project-71-ca882.firebaseapp.com",
    projectId: "project-71-ca882",
    storageBucket: "project-71-ca882.appspot.com",
    messagingSenderId: "735168294086",
    appId: "1:735168294086:web:8900232a310a5c29447bc7"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


