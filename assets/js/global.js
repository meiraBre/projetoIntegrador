class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header>
                <div class="logo">
                    <img src="./assets/img/doce_encanto_logo_circular.png" alt="Logo da loja de doces" width="60px">
                </div>
                <div class="lista">
                    <ul class="navMenu">
                        <li><a href="./index.html"><button>Início</button></a></li>
                        <li><a href="./comprar.html"><button>Produtos</button></a></li>
                        <li><a href="./apresentaçao.html"><button>Sobre</button></a></li>
                    </ul>
                </div>
                <div class="icones">
                    <a href="Rastreamento.html">
                        <img src="./assets/img/icone-carrinho.png" alt="Carrinho" width="25px">
                    </a>
                    <a href="login.html">
                        <img src="./assets/img/icone-usuário.png" alt="Usuário" width="25px">
                    </a>
                </div>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </header>
        `
    }
}

customElements.define('main-header', Header)

class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer class="footer">
                <p class="copyrightText">&copy; 2025 Doce Encanto. Todos os direitos reservados.</p>
            </footer>
        `
    }
}

customElements.define('main-footer', Footer)