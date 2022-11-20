// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// REACT_APP_apiKey=AIzaSyCzEpSBzQ8EUKSdwxPwa9A2qY_0LT7c9kg
// REACT_APP_authDomain=doctors-portal-5cd6b.firebaseapp.com
// REACT_APP_projectId=doctors-portal-5cd6b
// REACT_APP_storageBucket=doctors-portal-5cd6b.appspot.com
// REACT_APP_messagingSenderId=176673826295
// REACT_APP_appId=1:176673826295:web:4ee706d92d6225c1d8faf2