const passwordVerif = (password) => {

    //   1. Add the following verifications:
    // password should be larger than 8 chars
    
       if (password.length > 8) {
   
       return // ok
   
       } else {
   
       return "password should be longer than 8 characters";
       }
   
   //  2. password should not be null
   
       if (password != null){
   
           return // ok
       } else {
   
           return "password is not valid";
       }
   
   // 3. password should have one uppercase letter at least
   
       if (password /*hoe check je 1 hoofdletter*/) {
   
           return // ok
       } else {
   
           return " password should contain 1 capital letter";
       }
   // 4. password should have one lowercase letter at least
       if (password /*hoe check je 1 lowercase*/) {
   
           return // ok
       } else {
   
       return " password should contain 1 lowercase letter";
   }
   // 5. password should have one number at least */
   
       if (password /*hoe check je nummber in woord*/) {
   
           return // ok
       } else {
   
       return " password should contain 1 lowercase letter";
       }
   
   
   }
   