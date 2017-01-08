import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "SENDER_ID"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;