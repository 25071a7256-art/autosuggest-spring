// alert("Hello from JS");
console.log("Hello from JS");

var users = [
    {
        name: "John Doe",
        gender: "Male",
        img: "john.png"
    },
    {
        name: "Jan",
        gender: "Female",
        img: "jan.jpeg"
    }
];

var id = 0;

function toggleUser() {
    // Move to the next user
    id = (id + 1) % 2;

    // Update image
    var userImage = document.getElementById("user-image");
     userImage.src = users[id].img;

    // Update name
    var userName = document.getElementById("user-name");
     userName.innerHTML = users[id].name;

    // Update gender
    var userGender = document.getElementById("user-gender");
     userGender.innerHTML = users[id].gender;
}


function randomUser(){
    fetch('https://randomuser.me/api/')
        .then(function(response){
            //convert raw text in to json
            return response.json();
        })
        .then(function(data){
              var userData=data.results[0];
    var userImage = document.getElementById("user-image");
     userImage.src = userData.picture.large;

    var userName = document.getElementById("user-name");
     userName.innerHTML = userData.name.first + " " + userData.name.last;

    var userGender = document.getElementById("user-gender");
     userGender.innerHTML = userData.gender;
        });
};