function logout(){
    window.location = "index.html"
}
var username = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome "+username
function addRoom(){
    room_name = document.getElementById("room_name").value
    console.log(room_name)
    firebase.database().ref("/").child(room_name).update({   
      purpose:" adding_new_room" 
    })}
    console.log("room_name - " + Room_names)