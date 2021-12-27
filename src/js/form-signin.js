function login() {

  if ( document.querySelector('#correo-sesion').value === '' || document.querySelector('#password-sesion').value === '' ) {    
    alert('1 o mas campos se encuentran vacios');
    return;
  }
  
  const correo = document.querySelector('#correo-sesion').value;
  const contrasena = document.querySelector('#password-sesion').value;
  
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
  if (usuarios.some(usuario => usuario.correo === correo && usuario.contrasena === contrasena)) {
    
    alert('Bienvenido');
    document.querySelector('header').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    document.querySelector('#pokemon').style.display = 'block';

  } else if (usuarios.some(usuario => usuario.correo === correo)) {
    alert('Contraseña incorrecta');
  } else {
    alert('Esta cuenta no existe');
  }

  if (localStorage.getItem('usuarios')) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(usuario => usuario.correo === document.querySelector('#correo-sesion').value);
    document.querySelector('#pokemon p span').innerHTML = usuario.nombre;
  }

}