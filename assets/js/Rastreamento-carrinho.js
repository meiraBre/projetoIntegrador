let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    const itemExistente = carrinho.find(item => item.nome === nome);
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById("carrinho-lista");
    listaCarrinho.innerHTML = "";
    let total = 0;

    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$${item.preco} x ${item.quantidade}`;
        listaCarrinho.appendChild(li);
        total += item.preco * item.quantidade;
    });

    document.getElementById("carrinho-total").textContent = total.toFixed(2);
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