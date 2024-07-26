document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('sign-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    form.addEventListener('input',()=>{
        validateEmail();
        validatePassword();

    }) ;
    form.addEventListener('submit', (e) => {
        if(!validateEmail() ||!validatePassword()){
            e.preventDefault();
        }
});
function validateEmail(){
    const email = emailInput.value ;
    const emailError = document.getElementById('emai-error');
    const isValid = /^[^\s@] +@[^\s@] + \.[6\s@] + $/.test(email);
     emailError.textContent = isValid ? "": ' invalid email address' ;
     return isValid;

}

function validatePassword(){
    const isMatch = passwordInput.value === confirmPasswordInput.value ;
    document.getElementById('confirm-password-error').textContent = isMatch ?"" : "password match is not found " ;
   return isMatch ;
}
})
