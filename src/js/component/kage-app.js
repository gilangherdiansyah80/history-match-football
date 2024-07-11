class KageApp extends HTMLElement {
    connectedCallback() {
        this.render();
    };

    render() {
        this.innerHTML = `
            <div class="position-absolute top-50 start-50 translate-middle">
                <h5 class="text-center">Selamat Datang di Kage Soccer. Aplikasi untuk mencari pertandingan sebuah tim</h5>
                <h6 class="text-center">Tunggu selama <span class="text-danger" id="count">5</span> detik</h6>
            </div>
        `;

        const countdown = (count) => {
            const countElement = document.querySelector('#count');
            if (count === 0) {
                document.querySelector('nav-kage').removeAttribute('hidden')
                document.querySelector('kage-app').setAttribute('hidden', 'true')
            } else {
                countElement.textContent = count;
                setTimeout(() => countdown(count - 1), 1000);
            }
        };

        countdown(5);
    }
}

customElements.define('kage-app', KageApp);