const form = document.querySelector(".form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const country = document.getElementById("country")
const zipCode = document.getElementById("zip-code")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("password-confirmation")


const errorUsername = document.querySelector(".error-username")
const errorEmail = document.querySelector(".error-email")
const errorCountry = document.querySelector(".error-country")
const errorZipCode = document.querySelector(".error-zip-code")
const errorPassword = document.querySelector(".error-password")
const errorConfirmationPassword = document.querySelector(".error-confirmation-password")


username.addEventListener("input", (event)=>{
    if(username.validity.valid){
        errorUsername.textContent = ""
        errorUsername.className = "error-username"
    }else{
        showError()
    }
})

email.addEventListener("input", (event)=>{
    if(username.validity.valid){
        errorEmail.textContent = ""
        errorEmail.className = "error-email"
        
    }else{
        showError()
    }
})

country.addEventListener("input", (event)=>{
    if(username.validity.valid){
        errorCountry.textContent = ""
        errorCountry.className = "error-country"
        
    }else{
        showError()
    }
})

zipCode.addEventListener("input", (event)=>{
    if(username.validity.valid){
        errorZipCode.textContent = ""
        errorZipCode.className = "error-zip-code"
        
    }else{
        showError()
    }
})


password.addEventListener("input", (event)=>{
    if(username.validity.valid){
        errorPassword.textContent = ""
        errorPassword.className = "error-password"
        
    }else{
        showError()
    }
})

confirmPassword.addEventListener("input" , (event)=>{
    if(confirmPassword.validity.valid){
        errorConfirmationPassword.textContent = ""
        errorConfirmationPassword.className = "error-confirmation-password"

    }
})



form.addEventListener("submit" , (event)=>{
    if(!email.validity.valid    ||
       !username.validity.valid ||
       !country.validity.valid  ||
       !zipCode.validity.valid  ||
       !password.validity.valid ||
       !confirmPassword.validity.valid ){


        console.log("This is inside it")
        showError()
        event.preventDefault()
    }



    if(password.value !== confirmPassword.value){
        errorPassword.textContent = "The password Not the same"
        errorConfirmationPassword.textContent = "The Password Not the same"
        showError()
        event.preventDefault()
    }

})

function showError(){
    if(email.validity.valueMissing){
        errorEmail.textContent = "You need to enter an Email Address"
    }else if (email.validity.typeMismatch){
        errorEmail.textContent = "Entered Value need to be email Address"
    }

    errorEmail.className = "error-email active"

    if(username.validity.valueMissing){
        errorUsername.textContent = "You need to enter an username"
    }else if (username.validity.typeMismatch){
        errorUsername.textContent = "Entered Value need to be username"
    }

    errorUsername.className = "error-username active"


    if(country.validity.valueMissing){
        errorCountry.textContent = "You need to enter your country"
    }else if (country.validity.typeMismatch){
        errorCountry.textContent = "Entered Value need to be country"
    }

    errorCountry.className = "error-country active"


    if(zipCode.validity.valueMissing){
        errorZipCode.textContent = "You need to enter an zip-Code Address"
    }else if (country.validity.typeMismatch){
        errorZipCode.textContent = "Entered Value need to be zip-Code Address"
    }


    if(password.validity.valueMissing){
        errorPassword.textContent = "You need to enter a password"
    }else if (password.validity.typeMismatch){
        errorPassword.textContent = "Entered Value need to be Password"
    }

    errorPassword.className = "error-password active"

    if(confirmPassword.validity.valueMissing){
        errorConfirmationPassword.textContent = "You need to enter a password"
    }else if (confirmPassword.validity.typeMismatch){
        errorConfirmationPassword.textContent = "Entered Value need to be password"
    }

    if(confirmPassword.value !== password.value){
        errorPassword.textContent = "The password Not the same"
        errorConfirmationPassword.textContent = "The Password Not the same"
    }

    errorConfirmationPassword.className = "error-confirmation-password active"
}