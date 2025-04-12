produtosLoja = [
    {
        titulo: "Bolo de Pote Prestígio",
        descricao: "O Sabor Irresistível do Coco com Chocolate",
        detalhado: "Delicie-se com o nosso Bolo de Pote Prestígio, uma explosão de sabor que combina a maciez do bolo de chocolate com um recheio cremoso de coco. Camadas generosas de um brigadeiro aveludado e um toque especial de leite condensado.",
        preco: 14.99,
        imagem: "assets/img/bolo-de-pote.webp"
    },
    {
        titulo: "Bolo de Fubá Tradicional",
        descricao: "Sabor de casa de vó em cada pedaço",
        detalhado: "Experimente o verdadeiro gostinho da roça com o nosso Bolo de Fubá Tradicional. Leve, fofinho e com aquele toque especial de erva-doce, esse bolo é perfeito para acompanhar um cafezinho e trazer conforto em qualquer momento do dia.",
        preco: 9.99,
        imagem: "assets/img/bolo-de-fubá.webp"
    },
    {
        titulo: "Brigadeiro Gourmet",
        descricao: "O clássico brasileiro, em sua melhor versão",
        detalhado: "Nosso Brigadeiro Gourmet é feito com chocolate belga e leite condensado de altíssima qualidade. Uma explosão cremosa e chocolatuda que derrete na boca — impossível comer um só!",
        preco: 2.50,
        imagem: "assets/img/brigadeiro.webp"
    },
    {
        titulo: "Brownie de Chocolate",
        descricao: "Crocante por fora, molhadinho por dentro",
        detalhado: "Um brownie artesanal feito com chocolate meio amargo, pedaços de chocolate ao leite e aquele toque fudgy irresistível. Ideal pra quem não resiste a um doce com personalidade e intensidade.",
        preco: 6.50,
        imagem: "assets/img/brownie.png"
    },
    {
        titulo: "Cone Trufado",
        descricao: "Surpreenda-se com cada mordida",
        detalhado: "Nosso Cone Trufado é recheado com um creme super cremoso de brigadeiro e coberto com chocolate crocante. Uma casquinha que guarda uma verdadeira explosão de sabor por dentro!",
        preco: 7.99,
        imagem: "assets/img/cone-trufado.jpeg"
    },
    {
        titulo: "Donuts Recheado",
        descricao: "Coloridos, fofinhos e deliciosos",
        detalhado: "Os nossos donuts são preparados com massa leve e macia, cobertos com glacê e granulados coloridos. E o melhor: recheios variados como doce de leite, chocolate e morango. Um mimo que alegra o dia!",
        preco: 5.50,
        imagem: "assets/img/donnuts.jpeg"
    },
    {
        titulo: "Cupcake Decorado",
        descricao: "Pequeno no tamanho, gigante no sabor",
        detalhado: "Um bolinho macio com cobertura generosa de chantilly ou buttercream, e decorações temáticas irresistíveis. Ideal pra festas, lembrancinhas ou pra se mimar em um dia qualquer!",
        preco: 4.99,
        imagem: "assets/img/cupcake.webp"
    },
]

let idx = 0;

const imgProduto = document.getElementById("produto-img");
const tituloProduto = document.getElementById("produto-titulo");
const descricaoProduto = document.getElementById("produto-descricao");
const detalhadoProduto = document.getElementById("produto-detalhado");
const precoProduto = document.getElementById("produto-preco");
const botaoProduto = document.getElementById("botao-produto")

function atualizarProduto() {
    const produto = produtosLoja[idx];
    imgProduto.src = produto.imagem;
    imgProduto.alt = produto.titulo;
    tituloProduto.textContent = produto.titulo;
    descricaoProduto.textContent = produto.descricao;
    detalhadoProduto.textContent = produto.detalhado;
    precoProduto.textContent = `R$ ${produto.preco.toFixed(2)}`;
    botaoProduto.textContent = `Comprar Produto`
}

function carrossel() {
    idx++;
    if (idx >= produtosLoja.length) {
        idx = 0;
    }
    atualizarProduto();
}

atualizarProduto(); 
setInterval(carrossel, 4000);

