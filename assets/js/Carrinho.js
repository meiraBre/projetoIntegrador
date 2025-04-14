let carrinho = [];

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById("carrinho-lista");
    const carrinhoVazio = document.getElementById("carrinho-vazio");
    listaCarrinho.innerHTML = "";
    let total = 0;

    if (carrinho.length === 0) {
        carrinhoVazio.style.display = "block"; // Mostrar mensagem de carrinho vazio
    } else {
        carrinhoVazio.style.display = "none"; // Esconder mensagem
        carrinho.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.nome} - R$${item.preco} x ${item.quantidade}`;
            listaCarrinho.appendChild(li);
            total += item.preco * item.quantidade;
        });
    }

    document.getElementById("carrinho-total").textContent = total.toFixed(2);
}

function adicionarAoCarrinho(nome, preco) {
    const itemExistente = carrinho.find(item => item.nome === nome);
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }
    atualizarCarrinho();
}

function limparCarrinho() {
    carrinho = [];
    atualizarCarrinho();
}

function adicionarPedidoAoCarrinho(id) {
    const pedido = pedidos.find(p => p.id === id);
    if (pedido) {
        adicionarAoCarrinho(pedido.pedido, 10); // Adicione um preço fixo ou dinâmico.
    }
}
function exibirCarrinhoModal() {
    const modal = document.getElementById("carrinho-modal");
    modal.style.display = "flex"; // Exibe o modal
    atualizarCarrinho(); // Atualiza o conteúdo do carrinho
}

function fecharCarrinhoModal() {
    const modal = document.getElementById("carrinho-modal");
    modal.style.display = "none"; // Oculta o modal
}
