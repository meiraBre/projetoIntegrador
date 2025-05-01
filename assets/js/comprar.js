produtosLoja = [
    {
        titulo: "Bolo de Pote Prestígio",
        descricao: "O Sabor Irresistível do Coco com Chocolate",
        detalhado: "Delicie-se com o nosso Bolo de Pote Prestígio, uma explosão de sabor que combina a maciez do bolo de chocolate com um recheio cremoso de coco. Camadas generosas de um brigadeiro aveludado e um toque especial de leite condensado.",
        preco: 14.99,
        imagem: "assets/img/bolo-de-pote.webp"
    },
    {
        titulo: "Bolo de Fubá",
        descricao: "Sabor de casa de vó em cada pedaço",
        detalhado: "Experimente o verdadeiro gostinho da roça com o nosso Bolo de Fubá Tradicional. Leve, fofinho e com aquele toque especial de erva-doce, esse bolo é perfeito para acompanhar um cafezinho e trazer conforto em qualquer momento do dia.",
        preco: 9.99,
        imagem: "assets/img/bolo-de-fubá.webp"
    },
    {
        titulo: "Brigadeiro",
        descricao: "O clássico brasileiro, em sua melhor versão",
        detalhado: "Nosso Brigadeiro Gourmet é feito com chocolate belga e leite condensado de altíssima qualidade. Uma explosão cremosa e chocolatuda que derrete na boca — impossível comer um só!",
        preco: 2.50,
        imagem: "assets/img/brigadeiro.webp"
    },
    {
        titulo: "Brownie",
        descricao: "Crocante por fora, molhadinho por dentro",
        detalhado: "Um brownie artesanal feito com chocolate meio amargo, pedaços de chocolate ao leite e aquele toque fudgy irresistível. Ideal pra quem não resiste a um doce com personalidade e intensidade.",
        preco: 6.50,
        imagem: "assets/img/brownie.png"
    },
    {
        titulo: "Trufa",
        descricao: "Surpreenda-se com cada mordida",
        detalhado: "Nossa Trufa é recheado com um creme super cremoso de brigadeiro e coberto com chocolate crocante. Uma casquinha que guarda uma verdadeira explosão de sabor por dentro!",
        preco: 7.99,
        imagem: "assets/img/cone-trufado.jpeg"
    },
    {
        titulo: "Donnuts",
        descricao: "Coloridos, fofinhos e deliciosos",
        detalhado: "Os nossos donuts são preparados com massa leve e macia, cobertos com glacê e granulados coloridos. E o melhor: recheios variados como doce de leite, chocolate e morango. Um mimo que alegra o dia!",
        preco: 5.50,
        imagem: "assets/img/donnuts.jpeg"
    },
    {
        titulo: "Palito Trufado",
        descricao: "Chocolate belga e morangos frescos",
        detalhado: "Uma sofisticada sobremesa artesanal composta por camadas de chocolate belga de alta qualidade, envoltas em morangos frescos selecionados. Finalizada com fios de chocolate ao leite e granulados gourmet.",
        preco: 18.90,
        imagem: "assets/img/palito-trufado.jpeg"
    },
    {
        titulo: "Pudim",
        descricao: "Clássico pudim cremoso com caramelo",
        detalhado: "Clássico pudim de leite condensado com textura ultra cremosa, finalizado com uma generosa calda de caramelo artesanal. Perfeito para ocasiões especiais.",
        preco: 29.90,
        imagem: "assets/img/pudim.jpeg"
    },
    {
        titulo: "Sorvete",
        descricao: "Cone crocante e sorvete premium",
        detalhado: "Cone crocante de waffle recheado com sorvete artesanal de chocolate trufado, baunilha bourbon e creme de leite, coberto com chocolate meio amargo e amêndoas.",
        preco: 22.00,
        imagem: "assets/img/sorvete.webp"
    },
    {
        titulo: "Torta de Maracujá",
        descricao: "Torta refrescante de maracujá com base crocante",
        detalhado: "Uma deliciosa torta artesanal com recheio cremoso de maracujá fresco, coberta com pedaços da fruta e finalizada com uma base de biscoito amanteigado. Perfeita para momentos especiais.",
        preco: 18.00,
        imagem: "assets/img/torta-maracuja.webp"
    },
    {
        titulo: "Alfajor",
        descricao: "Alfajor macio coberto com chocolate",
        detalhado: "Tradicional alfajor argentino, feito com dois biscoitos macios recheados com doce de leite cremoso e mergulhados em uma cobertura generosa de chocolate ao leite. Finalizado com açúcar de confeiteiro.",
        preco: 15.00,
        imagem: "assets/img/alfajor.webp"
    }
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

