function login() {  

  if ( document.querySelector('#email-sesion').value === '' || document.querySelector('#password-sesion').value === '' ) {    
    
    document.querySelector('#p-pb-signin').classList.add('form-error');
    
    setTimeout(function() {
      document.querySelector('#p-pb-signin').classList.remove('form-error');
    }, 1000);

    if ( document.querySelector('#email-sesion').value === '' ) {
      document.querySelector('#email-sesion').classList.add('input-invalid');
    } else {
      document.querySelector('#email-sesion').classList.remove('input-invalid');
      document.querySelector('#email-sesion').classList.add('input-isvalid');
    }

    if ( document.querySelector('#password-sesion').value === '' ) {
      document.querySelector('#password-sesion').classList.add('input-invalid');
    } else {
      document.querySelector('#password-sesion').classList.remove('input-invalid');
      document.querySelector('#password-sesion').classList.add('input-isvalid');
    }
    
    return;

  }
  
  const email = document.querySelector('#email-sesion').value;
  const password = document.querySelector('#password-sesion').value;
  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  if (users.some(user => user.trainerEmail === email && user.trainerPassword === password)) {
    window.location.href = 'home.html';
  } else if (users.some(user => user.trainerEmail === email)) {
    document.getElementById('modal-wrongPassword').classList.add('active');
  } else {
    document.getElementById('modal-unexistAccount').classList.add('active');
  }

  if (localStorage.getItem('users')) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.trainerEmail === document.querySelector('#email-sesion').value);
    document.querySelector('#pokemon p span').innerHTML = user.trainerName;
  }

}