const btnLupa = document.getElementById('btn-lupa');
const barraPesquisa = document.getElementById('barra-pesquisa');

btnLupa.addEventListener('click', () => {
  barraPesquisa.classList.toggle('escondido');
});