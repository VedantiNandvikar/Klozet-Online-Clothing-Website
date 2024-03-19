var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');

function validateName(){
      var name = document.getElementById('contact-name').value;

      if(name.length == 0){
        nameError.innerHTML = 'Required';
        return false;
      }
      if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'FullName';
        return false;
      }
      nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Required';
        return false;
      }
      if(!email.match(/^[A-Za-z\.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid';
        return false;
      }
      emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      return true;

}