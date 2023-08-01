var inputYourName = document.getElementById("yourname");
var inputYourEmail = document.getElementById("youremail");
var inputYourPassword = document.getElementById("yourpass");

var allUser = [];


function signupData (){


if ( inputYourName.value == "" ||  inputYourEmail.value == "" || inputYourPassword.value == "") {
   
    document.getElementById('messegError').innerHTML=`<p>All inputs is required</p>`
    
} else{
     var user = {
    name : inputYourName.value,
    email: inputYourEmail.value,
    pass : inputYourPassword.value,
     }

}

    allUser.push(user),
    localStorage.setItem("allUser" , JSON.stringify(allUser));
    clearForm()

    // console.log( allUser )   
}


function clearForm(){
    inputYourName.value ="";
    inputYourEmail.value  ="";
    inputYourPassword.value  ="";
}


function validateName() {
        var nameRegex = /^[A-Z][a-z]{3,9}$/
         return  nameRegex.test(inputYourName.value);
        }
