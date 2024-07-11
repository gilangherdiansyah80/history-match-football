import './kage-item.js'

class KageList extends HTMLElement {
    set kages(kages) {
        this._kages = kages;
        this.render();
    };

    renderError(message) {
        this.innerHTML += `<h3>${message}</h3>`;
    };

    render() {
        this.innerHTML = '';
        this._kages.forEach(kagel => {
            const kageItemElement = document.createElement('kage-item');
            kageItemElement.kagel = kagel;
            this.appendChild(kageItemElement);
        });
    }
}

customElements.define('kage-list', KageList);