const form = document.querySelector('.login-form');
let objectForm = {
      email: '',
      password: '',
}

form.addEventListener('submit', onoFormSubmit);
function onoFormSubmit(event) {
      
      event.preventDefault();
      const {
            elements : {email, password}
      } = event.currentTarget;

      if (email.value === "" || password.value === "") {
            return alert ("Все поля должны быть заполнены!");
      }
      objectForm.email = email.value;
      objectForm.password = password.value;
      event.currentTarget.reset();
      return console.log (objectForm);     
}