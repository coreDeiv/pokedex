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
