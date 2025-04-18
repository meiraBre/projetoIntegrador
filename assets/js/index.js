const btnLupa = document.getElementById('btn-lupa');
const barraPesquisa = document.getElementById('barra-pesquisa');
const inputPesquisa = document.getElementById('pesquisa');

btnLupa.addEventListener('click', () => {
  barraPesquisa.classList.toggle('escondido');
});

inputPesquisa.addEventListener('input', () => {
  const termo = inputPesquisa.value.toLowerCase();
  const produtos = document.querySelectorAll('.produto');

  produtos.forEach(produto => {
    const nome = produto.querySelector('.nomeProduto').textContent.toLowerCase();
    if (nome.includes(termo)) {
      produto.style.display = 'inline-block';
    } else {
      produto.style.display = 'none';
    }
  });
});

  