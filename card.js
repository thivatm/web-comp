import { url } from './services';

class CardComponent extends HTMLElement {
    constructor (){
        super();
    }
    
    render(){
        
    }

    async fetchFromGiphy (){
        const res = await fetch(url);
        const json = await res.json()['data'][0];

        const gifUrl = json.images['fixed_height_small'].url;
        const gifName = json.title;

        return {
            name: gifName, 
            url: gifUrl
        }
    }
}

customElements.define('card-comp', CardComponent);