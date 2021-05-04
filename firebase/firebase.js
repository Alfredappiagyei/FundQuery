import * as firebase from 'firebase'
 
import 'firebase/auth';
var firebaseConfig = {
  apiKey: "AIzaSyCO8kCOtzb564_LycOLOdlofZ8CeA-GPPk",
  authDomain: "fundquerry.firebaseapp.com",
  projectId: "fundquerry",
  storageBucket: "fundquerry.appspot.com",
  messagingSenderId: "671529970234",
  appId: "1:671529970234:web:01b1ccb8f1ce1e0b45a303"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 
export default firebase