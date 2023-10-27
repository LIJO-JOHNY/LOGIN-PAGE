// validate name
function validateName() {
    var name = document.getElementById("name").value;
    var nameMessage = document.getElementById("namems");

    if (name.length === 0 || name.trim() === "") {
        nameMessage.innerHTML = "Name cannot be empty";
        return false;// Return false to show validation failure
    }else if (name.length < 3) {
        nameMessage.innerHTML = "Name must be at least 3 characters long";
        return false
    }else {
        nameMessage.innerHTML = ""; // Clear any previous error messages
        return true
    }
}

// validate email
function validateEmail() {
    var email = document.getElementById("email").value;
    var emailMessage = document.getElementById("emailms");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.length === 0 || email.trim() === "") {
        emailMessage.innerHTML = "Email cannot be empty";
        return false;
    } else if (!emailRegex.test(email)) {
        emailMessage.innerHTML = "Invalid email format";
        return false
    } else {
        emailMessage.innerHTML = "";
        return true;
    }
}

// validate password
function validatePassword() {
    var password = document.getElementById("password").value;
    var passwordMessage = document.getElementById("passwordms");

    if (password.length === 0 || password.trim() === "") {
        passwordMessage.innerHTML = "Password cannot be empty";
        return false
    } else if (password.length < 3) {
        passwordMessage.innerHTML = "Password must be at least 3 characters long";
        return false
    } else {
        passwordMessage.innerHTML = "";
        return true
    }
}


const regButton=document.getElementById("registrationbtn")
regButton.addEventListener("click",(event)=>{
    const name=validateName()
    const email=validateEmail()
    const password=validatePassword()
    if(name && email && password){
        console.log("Success")
    }
    else{
        event.preventDefault()
    }
})
