
var emailInput = document.getElementById("emailstorage")
var passwordInput = document.getElementById("storagepassword")



function siginIn() {
     
    var userData = {
        email : emailInput.value,
        password :  passwordInput.value, 
    }
    console.log(userData);
    document.getElementById("userName").innerHTML = `<p class="text-danger fs-2">welcom mahmoud</p>` 
    
    

}
