import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCLZ1d__qnwzS0iJ5sVhSY_FTHzi6EdORA",
    authDomain: "todo-list-react-72f6c.firebaseapp.com",
    projectId: "todo-list-react-72f6c",
    storageBucket: "todo-list-react-72f6c.appspot.com",
    messagingSenderId: "804563404759",
    appId: "1:804563404759:web:9229faebf3322bad992d92",
    measurementId: "G-N275TP6DXL"
                       };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;