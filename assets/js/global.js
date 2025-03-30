class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header class="header">
                <div class="logo-container">
                    <img src="assets/doce_encanto_logo_circular.png" alt="Logo">
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