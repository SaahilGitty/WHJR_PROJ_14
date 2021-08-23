var firebaseConfig = {
    apiKey: "AIzaSyD02Sc8c9Hwh-gyfg8JLU96oFvLNgtNg88",
    authDomain: "alphagame-ab16c.firebaseapp.com",
    projectId: "alphagame-ab16c",
    storageBucket: "alphagame-ab16c.appspot.com",
    messagingSenderId: "99463502302",
    appId: "1:99463502302:web:c6961e0c924b009aef654f",
    measurementId: "G-822YM40MWC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const welcome = document.getElementById("welcome");

function load_name() {
    welcome.innerHTML = "Welcome, " + localStorage.getItem("User Name")
}

function sign_out() {
    localStorage.setItem("User Name", "")
    window.location = "index.html";
}