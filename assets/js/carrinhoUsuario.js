document.addEventListener("DOMContentLoaded", function () {
    // Captura todos os ícones de "adicionar ao carrinho"
    const iconesComprar = document.querySelectorAll('.icone-comprar');

    iconesComprar.forEach(icon => {
        icon.addEventListener('click', function () {
            const nome = icon.getAttribute('data-nome');
            const imagem = icon.getAttribute('data-img');
            const preco = 15.99; // Defina um preço ou extraia do lugar certo

            // Adiciona o produto ao carrinho
            adicionarProdutoAoCarrinho(nome, imagem, preco);
        });
    });
});

// Função para adicionar produto ao carrinho
function adicionarProdutoAoCarrinho(nome, imagem, preco) {
    const carrinhoContainer = document.getElementById("carrinho-container");
    
    const itemCarrinho = document.createElement("div");
    itemCarrinho.classList.add("item-carrinho");
  
    itemCarrinho.innerHTML = `
      <img src="${imagem}" alt="${nome}">
      <div class="item-info">
        <h4>${nome}</h4>
        <p>Preço: R$ ${preco}</p>
        <div class="item-quantidade">
          <label for="quantidade">Quantidade:</label>
          <input type="number" id="quantidade" value="1" min="1">
        </div>
      </div>
      <button class="remover-item" onclick="removerItemCarrinho(this)">Remover</button>
    `;
  
    carrinhoContainer.appendChild(itemCarrinho);
  
    atualizarResumo();
}

// Função para remover item do carrinho
function removerItemCarrinho(button) {
    button.parentElement.remove();
    atualizarResumo();
}

// Função para atualizar o resumo da compra
function atualizarResumo() {
    const carrinhoContainer = document.getElementById("carrinho-container");
    const totalItens = carrinhoContainer.querySelectorAll(".item-carrinho").length;
    const totalPreco = Array.from(carrinhoContainer.querySelectorAll(".item-carrinho")).reduce((total, item) => {
        const preco = parseFloat(item.querySelector("p").textContent.replace("Preço: R$ ", ""));
        const quantidade = item.querySelector("#quantidade").value;
        return total + (preco * quantidade);
    }, 0);
  
    document.getElementById("total-itens").textContent = totalItens;
    document.getElementById("subtotal").textContent = totalPreco.toFixed(2);
}

  
  