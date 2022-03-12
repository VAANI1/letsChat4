var firebaseConfig = {
    apiKey: "AIzaSyCuLeS5CYUpkJfaBAe1tBZ1EEHN5On3ht4",
    authDomain: "classtestc93.firebaseapp.com",
    databaseURL: "https://classtestc93-default-rtdb.firebaseio.com",
    projectId: "classtestc93",
    storageBucket: "classtestc93.appspot.com",
    messagingSenderId: "246714829287",
    appId: "1:246714829287:web:18724624378d66c10e9542"
};


firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
    

}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;



//End code
 } });  }); }
getData();
