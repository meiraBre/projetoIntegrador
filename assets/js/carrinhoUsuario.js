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
  document.addEventListener("DOMContentLoaded", function () {
    const iconesComprar = document.querySelectorAll('.icone-comprar');

    iconesComprar.forEach(icon => {
      icon.addEventListener('click', function () {
        const nome = icon.getAttribute('data-nome');
        const imagem = icon.getAttribute('data-img');
        const preco = 15.99; // Valor fixo para exemplo

        salvarProdutoNoLocalStorage(nome, imagem, preco);

        // Redirecionar para a página de compra
        window.location.href = "carrinho.html";
      });
    });

    function salvarProdutoNoLocalStorage(nome, imagem, preco) {
      const novoProduto = {
        nome: nome,
        imagem: imagem,
        preco: preco,
        quantidade: 1
      };

      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

      const produtoExistente = carrinho.find(prod => prod.nome === nome);

      if (produtoExistente) {
        produtoExistente.quantidade += 1;
      } else {
        carrinho.push(novoProduto);
      }

      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  });


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
  const btnFinalizar = document.getElementById('finalizar-compra');
  const formPagamento = document.getElementById('form-pagamento');
  const popupCompra = document.getElementById('popup-compra');
  const btnConfirmar = document.getElementById('confirmar-pagamento');
  const btnSalvar = document.getElementById('salvar-avaliacao');

  // Mostrar o formulário de pagamento ao clicar no botão
  btnFinalizar.addEventListener('click', () => {
    formPagamento.style.display = 'block';
  });

  // Mostrar pop-up de compra finalizada
  btnConfirmar.addEventListener('click', () => {
    formPagamento.style.display = 'none';
    popupCompra.style.display = 'block';
  });

  // Exibir avaliação no console (pode ser salvo no localStorage, se quiser)
  btnSalvar.addEventListener('click', () => {
    const texto = document.getElementById('avaliacao').value;
    alert("Avaliação salva! Obrigado 😊");
    console.log("Avaliação do cliente:", texto);
  });


  
  