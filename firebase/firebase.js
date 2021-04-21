import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

 

import 'firebase/auth';
 var firebaseConfig = {
    apiKey: "AIzaSyDuYFbNVd8YeXQyXYLmpz_p003RUHEhLOA",
    authDomain: "finalproject-d83dc.firebaseapp.com",
    projectId: "finalproject-d83dc",
    storageBucket: "finalproject-d83dc.appspot.com",
    messagingSenderId: "330493720164",
    appId: "1:330493720164:web:ada83a69b307951abf9171"
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 
export default firebase