import * as firebase from 'firebase';

require('@firebase/firestore')

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAboN4EwDlcJMiNJwh5QaduS_IjidT--Fo",
    authDomain: "story-hub-7e3dc.firebaseapp.com",
    projectId: "story-hub-7e3dc",
    storageBucket: "story-hub-7e3dc.appspot.com",
    messagingSenderId: "435257656598",
    appId: "1:435257656598:web:ce1e38168f438e3f517c37"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();