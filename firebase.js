// Import the functions you need from the SDKs you need
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAlCCd3jUlQ4PT3tbuHWvku466HW34iXcQ",
    authDomain: "universal-c7c55.firebaseapp.com",
    databaseURL: "https://universal-c7c55-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "universal-c7c55",
    storageBucket: "universal-c7c55.firebasestorage.app",
    messagingSenderId: "55918736759",
    appId: "1:55918736759:web:6c7d3b4b10ec5d30b99d72",
    measurementId: "G-B8LVCHQ6GJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);