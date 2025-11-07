let startBtn = document.getElementById('start-button');

if (startBtn) {
    startBtn.addEventListener('click', function() {
        alert('Welcome to StarFans! Let\'s get started on your journey to the stars!');
        location.href = 'name.html';
    });
} else {
    console.error("Element with id 'start-button' not found.");
}

//initialize firebase from firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

//take the username from name.html and store it in firebase when press on nameBtn
let nameBtn = document.getElementById('nameBtn');
if (nameBtn) {
    nameBtn.addEventListener('click', function() {
        let userName = document.getElementById('name-form').value;
        if (userName) {
            set(ref(database, 'users/' + userName), {
                username: userName
            })
            .then(() => {
                alert('Welcome, ' + userName + '! Your name has been saved.');
                location.href = 'age.html';
            })
            .catch((error) => {
                console.error('Error writing to database: ', error);
            });
        } else {
            alert('Please enter your name.');
        }
    });
} else {
    console.error("Element with id 'name-form' not found.");
}

//take the age from age.html and store it in firebase when press on ageBtn
let ageBtn = document.getElementById('ageBtn');
if (ageBtn) {
    ageBtn.addEventListener('click', function() {
        let userAge = document.getElementById('age-form').value;
        if (userAge) {
            set(ref(database, 'users/' + userAge), {
                age: userAge
            })
            .then(() => {
                alert('Thank you, ' + userName + '! Your age has been saved.');
                location.href = 'preferences.html';
            })
            .catch((error) => {
                console.error('Error writing to database: ', error);
            });
        } else {
            alert('Please enter your age.');
        }
    });
} else {
    console.error("Element with id 'age-form' not found.");
}