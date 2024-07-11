class NavKage extends HTMLElement {
    connectedCallback() {
        this.render();
    };

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#elementInput').value;
    }

    render() {
        this.innerHTML = `
            <nav class="navbar bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded">
                <div class="container-fluid">
                    <a class="navbar-brand">Kage Soccer</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="elementInput">
                        <button class="btn" type="button" id="elementButton">Search</button>
                    </form>
                </div>
            </nav>
        `;

        const elementButton = document.querySelector('#elementButton');
        elementButton.addEventListener('click', this._clickEvent);
    }
}

customElements.define('nav-kage', NavKage);