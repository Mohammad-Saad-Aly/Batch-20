// function clickme (){
//     console.log("hello world")
// }
// window.clickme = clickme

// let getBtn = document.getElementById("btn")
// getBtn.addEventListener("click", ()=>{
//     console.log("hello smit")
// })

// import test from "./index.js";
// test()



import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyDzE9XtnuZWp-oREtimdDaJrnAEBTbKJio",
    authDomain: "shafa-ullah.firebaseapp.com",
    projectId: "shafa-ullah",
    storageBucket: "shafa-ullah.firebasestorage.app",
    messagingSenderId: "638505335031",
    appId: "1:638505335031:web:3ad03679f6a065f7ec7bf2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let signup = document.getElementById("signup")
let email = document.getElementById("email")
let password = document.getElementById("password")

if (signup) {

    signup.addEventListener("click", () => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.email + " sign up success")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    })

}


let signin = document.getElementById("signin")
let lemail = document.getElementById("lemail")
let lpassword = document.getElementById("lpassword")


if (signin) {
    signin.addEventListener("click", () => {
        signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.email + " login success")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    })
}
