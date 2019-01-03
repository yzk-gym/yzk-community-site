import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBVnRCHYWucag-ovMvMlEYwuRMAkBaoId4',
  authDomain: 'yzk-community-site.firebaseapp.com',
  projectId: 'yzk-community-site',
};
const firebaseApp = firebase.initializeApp(config);
const firestore = firebaseApp.firestore();
firestore.settings({ timestampsInSnapshots: true });

export default firestore;
