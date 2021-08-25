import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDDoP6AMWej90nxF3RwgPZdCcbnRxZfT2s",
  authDomain: "attention-54c65.firebaseapp.com",
  projectId: "attention-54c65",
  storageBucket: "attention-54c65.appspot.com",
  messagingSenderId: "848777128170",
  appId: "1:848777128170:web:64a16b12e097382d054f93",
  measurementId: "G-Q0NDLSJC3D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth= firebase.auth()


export {auth}