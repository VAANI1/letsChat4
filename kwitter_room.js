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
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "Adding room_name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              console.log("room name -  " + Room_names);

              row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id);'> #" + Room_names + " </div><hr></hr>";

              document.getElementById("output").innerHTML += row;
                
        });
  });
}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";

}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}