import { url } from './services.js';

class CardComponent extends HTMLElement {
    constructor (){
        super();
        const shadow = this.attachShadow({mode: 'open'});

        const template = document.getElementById('card-view');
        const templateInstance = template.content.cloneNode(true);
        shadow.appendChild(templateInstance);
    }

    async connectedCallback (){
        this.gifObj = await this.fetchFromGiphy();
        this.render(this, this.gifObj);
    }

    render(shadowElem, data){
        const shadowRoot = shadowElem.shadowRoot; 
        shadowRoot.getElementById('card-title').innerHTML = data.name;
        shadowRoot.getElementById('gif-view').src = data.url;
    }

    async fetchFromGiphy (){
        const res = await fetch(url);
        const json = await res.json();

        const gifUrl = json['data']['0'].images['fixed_height_small'].url;
        const gifName = json['data']['0'].title;
        const gifObject = {
            name: gifName, 
            url: gifUrl
        }
        return gifObject; 
    }
}

customElements.define('card-component', CardComponent);