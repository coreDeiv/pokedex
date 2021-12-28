function signup() {
  
  if ( document.querySelector('#name-trainer').value === '' || document.querySelector('#email-trainer').value === '' || document.querySelector('#pass-trainer').value === '' || document.querySelector('#pass-trainer-2').value === '') {    
    
    document.querySelector('#p-pb-signup').classList.add('form-error');

    setTimeout(function() {
      document.querySelector('#p-pb-signup').classList.remove('form-error');
    }, 1000);

    if ( document.querySelector('#name-trainer').value === '' ) {
      document.querySelector('#name-trainer').classList.add('input-invalid');
    } else {
      document.querySelector('#name-trainer').classList.remove('input-invalid');
      document.querySelector('#name-trainer').classList.add('input-isvalid');
    }

    if ( document.querySelector('#email-trainer').value === '' ) {
      document.querySelector('#email-trainer').classList.add('input-invalid');
    } else {
      document.querySelector('#email-trainer').classList.remove('input-invalid');
      document.querySelector('#email-trainer').classList.add('input-isvalid');
    }

    if ( document.querySelector('#pass-trainer').value === '' ) {
      document.querySelector('#pass-trainer').classList.add('input-invalid');
    } else {
      document.querySelector('#pass-trainer').classList.remove('input-invalid');
      document.querySelector('#pass-trainer').classList.add('input-isvalid');
    }

    if ( document.querySelector('#pass-trainer-2').value === '' ) {
      document.querySelector('#pass-trainer-2').classList.add('input-invalid');
    } else {
      document.querySelector('#pass-trainer-2').classList.remove('input-invalid');
      document.querySelector('#pass-trainer-2').classList.add('input-isvalid');
    }

    return;

  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.querySelector('#email-trainer').value)) {    
    
    document.querySelector('#p-pb-signup').classList.add('form-error');
    document.querySelector('#email-trainer').classList.add('input-error');
    return;

  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(document.querySelector('#pass-trainer').value)) {

    document.querySelector('#p-pb-signup').classList.add('form-error');
    document.querySelector('#pass-trainer').classList.add('input-error');
    return;
    
  } else if ( document.querySelector('#pass-trainer').value !== document.querySelector('#pass-trainer-2').value) {
    
    document.querySelector('#p-pb-signup').classList.add('form-error');
    document.querySelector('#pass-trainer-2').classList.add('input-error');
    return;

  }
  
  const email = document.querySelector('#email-trainer').value;
  const password = document.querySelector('#pass-trainer').value;
  const name = document.querySelector('#name-trainer').value;
  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  if (users.some(user => user.trainerEmail === email)) {    
    
    document.getElementById('modal-exisitingUser').classList.add('active');
    cleanFields();
    return false;

  } else {    
    
    users.push({
      trainerEmail:     email,
      trainerPassword:  password,
      trainerName:      name
    });

    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('modal-registeredUser').classList.add('active');

    cleanFields();

  }
}

function cleanFields() {
  document.querySelector('#name-trainer').value = '';
  document.querySelector('#email-trainer').value = '';
  document.querySelector('#pass-trainer').value = '';
  document.querySelector('#pass-trainer-2').value = '';
}