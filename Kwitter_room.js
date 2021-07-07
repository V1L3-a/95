// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBP1pqXhvmoviIEyv_F40c8mfMZTBpoDqw",
  authDomain: "kwit-df171.firebaseapp.com",
  projectId: "kwit-df171",
  storageBucket: "kwit-df171.appspot.com",
  messagingSenderId: "708238640519",
  appId: "1:708238640519:web:2a456bb5b128ba4732ff22"
};
// Initialize Firebase

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "div class='room_name' id=" + Room_names +" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
