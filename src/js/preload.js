// Preload Forms
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('#precharge').classList.remove('try-catch');
    document.querySelector('#precharge').classList.add('catched');
    setTimeout(() => {
      document.querySelector('#preload-btns').classList.add('active');
    }, 2000);
  }, 3000);
});