class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header class="header">
                <div class="logo-container">
                    <img src="assets/doce_encanto_logo_circular.png" alt="Logo">
                </div>
                <nav class="nav-menu">
                    <a href="index.html">Início</a>
                    <a href="#">Produtos</a>
                    <a href="apresentaçao.html">Sobre</a>
                </nav>
                <div class="icons-container">
                    <img src="assets/icone carrinho.png" alt="Carrinho" width="25px">
                    <a href="login.html"><img src="assets/icone usuário.png" alt="Usuário" width="25px"></a>
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