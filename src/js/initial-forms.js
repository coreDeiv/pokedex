// Toggle Forms
function changeOverlaytoRegister() {
  document.querySelector('#btn-login-overlay').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#overlay-forms').classList.remove('on');
    document.querySelector('#overlay-forms').classList.add('off');

    document.querySelector('#btn-login-overlay').classList.remove('active-button');
    document.querySelector('#btn-register-overlay').classList.add("active-button");

    document.querySelector('#title-login').classList.remove('active-title');
    document.querySelector('#title-register').classList.add('active-title');
  });
}

function changeOverlaytoLogin() {
  document.querySelector('#btn-register-overlay').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#overlay-forms').classList.remove('off');
    document.querySelector('#overlay-forms').classList.add('on');

    document.querySelector('#btn-login-overlay').classList.add('active-button');
    document.querySelector('#btn-register-overlay').classList.remove("active-button");

    document.querySelector('#title-login').classList.add('active-title');
    document.querySelector('#title-register').classList.remove('active-title');
  });
}

changeOverlaytoRegister();
changeOverlaytoLogin();