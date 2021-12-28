// const fetchPokemonColor = async () => {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon-color/${getRandomInt(1, 150)}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchPokemonColor().then(data => {
//   document.querySelector('body').style.backgroundColor = data.color.name;
//   console.log(data);
// });

// function cerrarSesion() {
//   localStorage.removeItem('usuarios');
//   document.querySelector('header').style.display = 'block';
//   document.querySelector('footer').style.display = 'none';
//   document.querySelector('#pokemon').style.display = 'none';
// }

// function recuperarContraseña() {
  
//   if (document.querySelector('#correo-recuperacion').value === '') {
//     alert('Correo invalido, por favor, ingrese un correo');
//     return;
//   }
  
//   if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.querySelector('#correo-recuperacion').value)) {
//     alert('Correo invalido, por favor, ingrese un correo valido');
//     return;
//   }
  
//   const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

//   if (!usuarios.some(usuario => usuario.correo === document.querySelector('#correo-recuperacion').value)) {
//     alert('El correo ingresado no existe');
//     return;
//   } else  {
//     alert('La contraseña es: ' + JSON.parse(localStorage.getItem('usuarios'))[0].contrasena);
//   }
  
// }
