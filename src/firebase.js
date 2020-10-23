import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD8LEOUaRhGCEhtm7VXL5pIZnR2z2Rz-Z4",
    authDomain: "facebook-app-3882e.firebaseapp.com",
    databaseURL: "https://facebook-app-3882e.firebaseio.com",
    projectId: "facebook-app-3882e",
    storageBucket: "facebook-app-3882e.appspot.com",
    messagingSenderId: "834326644888",
    appId: "1:834326644888:web:e6bb78a23ca155593028ed",
    measurementId: "G-38BFLJESD4"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;