
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('#precharge').classList.remove('try-catch');
    document.querySelector('#precharge').classList.add('catched');
  }, 3000);
});



const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const fetchPokemon = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(1, 150)}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchPokemon().then(data => {
  document.querySelector('#pokemon-container .pokem h1 span').innerHTML = data.name;
  document.querySelector('#pokemon-container .pokem #pokem-img-container img').src = data.sprites.other.dream_world.front_default;
  document.querySelector('#pokemon-container .pokem h2 span').innerHTML = data.types.map(type => type.type.name).join(', ');
  document.querySelector('#pokemon-container .pokem h3 span').innerHTML = data.abilities.map(ability => ability.ability.name).join(', ');
  console.log(data);
});

const fetchPokemonColor = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-color/${getRandomInt(1, 150)}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchPokemonColor().then(data => {
  document.querySelector('body').style.backgroundColor = data.color.name;
  console.log(data);
});

function signup() {
  
  if ( document.querySelector('#nombre').value === '' || document.querySelector('#correo').value === '' || document.querySelector('#password').value === '' || document.querySelector('#password2').value === '') {    
    alert('Por favor, llene todos los campos');
    return;
  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.querySelector('#correo').value)) {    
    alert('Por favor, ingrese un correo valido');
    return;
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(document.querySelector('#password').value)) {
    alert('Por favor, ingrese una contraseña valida');
    return;
  } else if ( document.querySelector('#password').value !== document.querySelector('#password2').value) {
    alert('Las contraseñas no coinciden');
    return;
  }
  
  const correo = document.querySelector('#correo').value;
  const contrasena = document.querySelector('#password').value;
  const nombre = document.querySelector('#nombre').value;
  
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
  if (usuarios.some(usuario => usuario.correo === correo)) {    
    alert('El usuario ya existe');
    return false;
  } else {    
    usuarios.push({
      correo: correo,
      contrasena: contrasena,
      nombre: nombre
    });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Registro exitoso');
    
    document.querySelector('header').style.display = 'none';
    document.querySelector('footer').style.display = 'block';

    document.querySelector('#nombre').value = '';
    document.querySelector('#correo').value = '';
    document.querySelector('#password').value = '';
    document.querySelector('#password2').value = '';

  }  
}

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

function mostrarFormularioDeIngreso() {
  document.querySelector('aside').style.display = 'none';
  document.querySelector('header').style.display = 'none';
  document.querySelector('footer').style.display = 'block';
}

function mostrarFormularioDeRegistro() {
  document.querySelector('aside').style.display = 'none';
  document.querySelector('header').style.display = 'block';
  document.querySelector('footer').style.display = 'none';
}

function mostrarFormularioDeRecuperacionDeContraseña() {
  document.querySelector('aside').style.display = 'block';
  document.querySelector('header').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
}

if (localStorage.getItem('usuarios')) {
  document.querySelector('header').style.display = 'none';
  document.querySelector('footer').style.display = 'none';

  document.querySelector('#pokemon').style.display = 'block';
  document.querySelector('#pokemon p span').innerHTML = JSON.parse(localStorage.getItem('usuarios'))[0].nombre;
}

function cerrarSesion() {
  localStorage.removeItem('usuarios');
  document.querySelector('header').style.display = 'block';
  document.querySelector('footer').style.display = 'none';
  document.querySelector('#pokemon').style.display = 'none';
}

function recuperarContraseña() {
  
  if (document.querySelector('#correo-recuperacion').value === '') {
    alert('Correo invalido, por favor, ingrese un correo');
    return;
  }
  
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.querySelector('#correo-recuperacion').value)) {
    alert('Correo invalido, por favor, ingrese un correo valido');
    return;
  }
  
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  if (!usuarios.some(usuario => usuario.correo === document.querySelector('#correo-recuperacion').value)) {
    alert('El correo ingresado no existe');
    return;
  } else  {
    alert('La contraseña es: ' + JSON.parse(localStorage.getItem('usuarios'))[0].contrasena);
  }
  document.querySelector('aside').style.display = 'none';
  document.querySelector('header').style.display = 'none';
  document.querySelector('footer').style.display = 'block';
}
