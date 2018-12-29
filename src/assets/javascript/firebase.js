const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyBVnRCHYWucag-ovMvMlEYwuRMAkBaoId4',
  authDomain: 'yzk-community-site.firebaseapp.com',
  projectId: 'yzk-community-site',
});
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true };
db.settings(settings);
db.collection('events').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc);
  });
});

// index.htmlでfirebaseのmoduleを読み込んでいたやつ。

<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script defer src="node_modules/firebase/firebase-app.js"></script>
  <script defer src="node_modules/firebase/firebase-auth.js"></script>
  <script defer src="node_modules/firebase/firebase-database.js"></script>
  <script defer src="node_modules/firebase/firebase-messaging.js"></script>
  <script defer src="node_modules/firebase/firebase-storage.js"></script>
  <script src="https://www.gstatic.com/firebasejs/5.7.2/firebase.js"></script>
  <script defer src="js/initialize-firebase.js"></script>
