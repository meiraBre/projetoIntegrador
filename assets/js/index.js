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

// ============ Modal de Adição ao Carrinho ============
// Cria o modal dinamicamente e adiciona ao body
const modalHTML = `
  <div id="modal" class="modal hidden">
    <div class="modal-content">
      <h2 id="modal-nome"></h2>
      <img id="modal-img" src="" alt="">
      <div class="quantidade">
        <button id="diminuir">-</button>
        <span id="quantidade">1</span>
        <button id="aumentar">+</button>
      </div>
      <p id="preco-total">Preço: R$ <span id="valor">5.00</span></p>
      <button id="fechar-modal">Fechar</button>
    </div>
  </div>
`;
document.body.insertAdjacentHTML("beforeend", modalHTML);
// Seletores do modal
const modal = document.getElementById('modal');
const modalNome = document.getElementById('modal-nome');
const modalImg = document.getElementById('modal-img');
const btnFechar = document.getElementById('fechar-modal');
const spanQuantidade = document.getElementById('quantidade');
const spanValor = document.getElementById('valor');
const btnAumentar = document.getElementById('aumentar');
const btnDiminuir = document.getElementById('diminuir');
// Valor fixo do produto (você pode substituir por dinâmico futuramente)
const precoUnitario = 5.00;
let quantidadeAtual = 1;
// Ação ao clicar em "+"
document.querySelectorAll('.icone-comprar').forEach(botao => {
  botao.addEventListener('click', () => {
    const nome = botao.getAttribute('data-nome');
    const img = botao.getAttribute('data-img');

    modalNome.textContent = nome;
    modalImg.src = img;
    quantidadeAtual = 1;
    spanQuantidade.textContent = quantidadeAtual;
    spanValor.textContent = precoUnitario.toFixed(2);

    modal.classList.remove('hidden');
  });
});
// Botões de quantidade
btnAumentar.addEventListener('click', () => {
  quantidadeAtual++;
  spanQuantidade.textContent = quantidadeAtual;
  spanValor.textContent = (quantidadeAtual * precoUnitario).toFixed(2);
});
btnDiminuir.addEventListener('click', () => {
  if (quantidadeAtual > 1) {
    quantidadeAtual--;
    spanQuantidade.textContent = quantidadeAtual;
    spanValor.textContent = (quantidadeAtual * precoUnitario).toFixed(2);
  }
});
// Fechar o modal
btnFechar.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Alerta ao clicar no ícone de coração
document.querySelectorAll('.iconesProdutos img:first-child').forEach(coracao => {
  coracao.addEventListener('click', () => {
    alert('Item favoritado!');
  });
});
