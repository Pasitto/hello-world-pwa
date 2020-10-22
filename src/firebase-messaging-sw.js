importScripts("https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBfRrBzOs8Vcc4Gykpb_lWR-Ldun7L7tUc",
    authDomain: "hello-pwa-8266c.firebaseapp.com",
    databaseURL: "https://hello-pwa-8266c.firebaseio.com",
    projectId: "hello-pwa-8266c",
    storageBucket: "hello-pwa-8266c.appspot.com",
    messagingSenderId: "456160590474",
    appId: "1:456160590474:web:adaff3f57c8615dc3f8b73",
    measurementId: "G-B9LTWPBG0L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});
