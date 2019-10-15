/*const pwField = document.querySelector('#passwordField'); 

const pwButton = document.querySelector('#verify');

const verifyMessag = document.querySelector('#showmassage');*/

function ifclick () {
    const pwField = document.getElementById("passwordValidation");
    const showMessage = document.getElementById("showMessage");
    const passwordVerif = () => {
        if (pwField, (password.length > 8)) {
            showMessage.innerHTML = "Correct Password";
        } else {
            showMessage.innerHTML = "Incorrect Password";
            passwordVerif();
        }
    }
   

    


   