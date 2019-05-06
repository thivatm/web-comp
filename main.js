import { url } from './services.js';

async function fetchFromGiphy (){
    const res = await fetch(url);
    const json = await res.json();

    console.log(json['data'][0].title);
}

document.addEventListener('DOMContentLoaded', fetchFromGiphy);
