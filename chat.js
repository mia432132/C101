// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZ24mKjydxNyObeS1kfoK-lkYKZG0Ia9k",
    authDomain: "letschat-78a15.firebaseapp.com",
    projectId: "letschat-78a15",
    storageBucket: "letschat-78a15.appspot.com",
    messagingSenderId: "878266213512",
    appId: "1:878266213512:web:55df4f8dbf4a6ec33a2b3d",
    measurementId: "G-62E5KL4WRG"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



