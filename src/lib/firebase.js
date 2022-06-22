import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyDwfdt2wltLGrjCHcqw7zWNMkC5vRsWDsI",
  authDomain: "instagram-a6d15.firebaseapp.com",
  databaseURL: "https://instagram-a6d15-default-rtdb.firebaseio.com",
  projectId: "instagram-a6d15",
  storageBucket: "instagram-a6d15.appspot.com",
  messagingSenderId: "571284389311",
  appId: "1:571284389311:web:53202c009a59c7e94ab50a"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


export { firebase, FieldValue };