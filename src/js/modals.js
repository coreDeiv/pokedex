document.addEventListener ('DOMContentLoaded', function(event) {

  closeModalRegisteredUser();
  closeModalExistingUser();
  closeModalWrongPassword();
  closeModalUnexistAccount();
  
  function closeModalRegisteredUser() {
    document.getElementById('p-mru-button').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('modal-registeredUser').classList.remove('active');
    });
  };

  function closeModalExistingUser() {
    document.getElementById('p-meu-button').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('modal-exisitingUser').classList.remove('active');
    });
  };

  function closeModalWrongPassword() {
    document.getElementById('p-mwp-button').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('modal-wrongPassword').classList.remove('active');
    });
  };

  function closeModalUnexistAccount() {
    document.getElementById('p-mua-button').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('modal-unexistAccount').classList.remove('active');
    });
  };

});