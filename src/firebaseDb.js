import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCBset4HV5Z6PtNCNBX4b__ww6lI2QuK7M",
    authDomain: "vue-firebase-7aeea.firebaseapp.com",
    databaseURL: "https://vue-firebase-7aeea.firebaseio.com",
    projectId: "vue-firebase-7aeea",
    storageBucket: "vue-firebase-7aeea.appspot.com",
    messagingSenderId: "833776552220",
    appId: "1:833776552220:web:a94f4dd43afe69ff6f12d9",
    measurementId: "G-WWDF50LVFR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();