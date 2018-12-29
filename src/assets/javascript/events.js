import firebase from 'firebase/app';


const db = firebase.database();
const events = db.ref('events/all');

