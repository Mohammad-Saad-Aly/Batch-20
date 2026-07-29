import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCH5KAPMTqzkxO9i5BfmldnCcdm4_4jIA0",
    authDomain: "batch-20-2764c.firebaseapp.com",
    projectId: "batch-20-2764c",
    storageBucket: "batch-20-2764c.firebasestorage.app",
    messagingSenderId: "481039576280",
    appId: "1:481039576280:web:2c082f0e07bc94a87abbad",
    measurementId: "G-G00Q3QNQJH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let getSbtn = document.getElementById('sbtn')

getSbtn.addEventListener('click', () => {

    let email = document.getElementById('semail')
    let password = document.getElementById('spass')

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            alert("user added successfully")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
})

