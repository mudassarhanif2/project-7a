import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBvq9wWdjXRUlpURdkrINbSIumo5UmIqWo",
    authDomain: "project-7a-a36d3.firebaseapp.com",
    databaseURL: "https://project-7a-a36d3.firebaseio.com",
    projectId: "project-7a-a36d3",
    storageBucket: "project-7a-a36d3.appspot.com",
    messagingSenderId: "399684781533",
    appId: "1:399684781533:web:c43c269bc1cecdcd026234",
    measurementId: "G-V0BNBQX2NG"
}

firebase.initializeApp(config);

export default firebase;