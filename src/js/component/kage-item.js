class KageItem extends HTMLElement {
    set kagel(kagel) {
        this._kagel = kagel;
        this.render();
    };

    render() {
        if (this._kagel.strThumb) {
            this.innerHTML = `
                <div class="d-flex flex-row mb-3 justify-content-center">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" id="buttonElement">
                                <div class="card container text-center">
                                    <img src="${this._kagel.strThumb}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <p class="card-text">${this._kagel.strEvent}</p>
                                        <p class="card-text">${this._kagel.strFilename}</p>
                                    </div>

                                    <div class="d-flex flex-column mb-3 text-center bg-light border rounded-bottom" id="collapseThree">
                                        <div class="p-2">Home Team : ${this._kagel.strHomeTeam}</div>
                                        <div class="p-2">Away Team : ${this._kagel.strAwayTeam}</div>
                                        <div class="p-2">Venue : ${this._kagel.strVenue}</div>
                                        <div class="p-2">Country : ${this._kagel.strCountry}</div>
                                        <div class="p-2" id="str-video">Video : ${this._kagel.strVideo ? `<a href="${this._kagel.strVideo}">Klik Disini</a>` : 'null'}</div>
                                        <div class="p-2">Status : ${this._kagel.strStatus}</div>
                                    </div>
                                </div>
                            </button>
                        </h2>
                    </div>
                </div>
            `;
        } else {
            this.innerHTML = '';
        }
    }        
}

customElements.define('kage-item', KageItem)