document.addEventListener("DOMContentLoaded", function () {
  const carrinhoContainer = document.getElementById("carrinho-container");
  const btnFinalizar = document.getElementById("finalizar-compra");
  const formPagamento = document.getElementById("form-pagamento");
  const popupCompra = document.getElementById("popup-compra");
  const btnSalvar = document.getElementById("salvar-avaliacao");
  const btnConfirmar = document.getElementById("confirmar-pagamento");

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  // Exibir os produtos
  function exibirCarrinho() {
    carrinhoContainer.innerHTML = ""; // Limpa antes de exibir

    carrinho.forEach((produto, index) => {
      const item = document.createElement("div");
      item.classList.add("item-carrinho");

      item.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div class="item-info">
          <h4>${produto.nome}</h4>
          <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
          <div class="item-quantidade">
            <label for="quantidade-${index}">Qtd:</label>
            <input type="number" id="quantidade-${index}" value="${produto.quantidade}" min="1">
          </div>
        </div>
        <button class="remover" data-index="${index}">Remover</button>
      `;

      carrinhoContainer.appendChild(item);
    });

    atualizarResumo();
  }

  // Atualizar resumo
  function atualizarResumo() {
    let totalItens = 0;
    let subtotal = 0;

    carrinho.forEach(produto => {
      totalItens += produto.quantidade;
      subtotal += produto.preco * produto.quantidade;
    });

    document.getElementById("total-itens").textContent = totalItens;
    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  }

  // Atualizar quantidade
  carrinhoContainer.addEventListener("input", (e) => {
    if (e.target.type === "number") {
      const index = parseInt(e.target.id.split("-")[1]);
      const novaQuantidade = parseInt(e.target.value);
      if (novaQuantidade >= 1) {
        carrinho[index].quantidade = novaQuantidade;
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        atualizarResumo();
      }
    }
  });

  // Remover produto
  carrinhoContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remover")) {
      const index = e.target.getAttribute("data-index");
      carrinho.splice(index, 1);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      exibirCarrinho();
    }
  });

  // Finalizar compra
  btnFinalizar.addEventListener("click", () => {
    window.location.href = "carrinhoUsuario.html"; // Redireciona para a página carrinho.html
  });

  // Confirmar pagamento
  btnConfirmar.addEventListener("click", () => {
    formPagamento.style.display = "none";
    popupCompra.style.display = "block";
    localStorage.removeItem("carrinho");
    carrinho = [];
    carrinhoContainer.innerHTML = "";
    atualizarResumo();
  });

  // Salvar avaliação
  btnSalvar.addEventListener("click", () => {
    const texto = document.getElementById("avaliacao").value.trim();
    if (texto) {
      alert("Avaliação salva! Obrigado 😊");
      console.log("Avaliação do cliente:", texto);
    } else {
      alert("Por favor, escreva algo na avaliação.");
    }
  });

  exibirCarrinho();
});





  
  