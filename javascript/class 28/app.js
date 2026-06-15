// localStorage.setItem("id", "sm-01")

// localStorage.setItem("name", "Rehman")

// localStorage.removeItem("id")

// localStorage.clear()

// sessionStorage.setItem("age", "26")

// function signUp() {
//   var signUpName = document.getElementById("s-name");
//   var signUpEmail = document.getElementById("s-email");
//   var signUpPass = document.getElementById("s-pass");

//   localStorage.setItem("name", signUpName.value);
//   localStorage.setItem("email", signUpEmail.value);
//   localStorage.setItem("pass", signUpPass.value);

//   Swal.fire({
//     title: "Sign up Success!",
//     text: "go to Login Page",
//     icon: "success",
//   });
// }

// function login() {
//   var loginEmail = document.getElementById("l-email");
//   var loginPass = document.getElementById("l-pass");

//   var getEmail = localStorage.getItem("email");
//   var getPass = localStorage.getItem("pass");

//   if (loginEmail.value == getEmail && loginPass.value == getPass) {
//     Swal.fire({
//       title: "Good job!",
//       text: "Login Success!",
//       icon: "success",
//     });
//   } else {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Something went wrong!",
//       footer: '<a href="#">Why do I have this issue?</a>',
//     });
//   }
// }

function logout(){
    localStorage.clear()
    location.href = "./signup.html"
}


