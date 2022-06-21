import debounce from 'lodash.debounce';
import {Notify} from "notiflix";
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const SEARCH_URL = 'https://restcountries.com/v3.1/name/';
const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');


inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));



function fetchCountries(name) {
    const url = `${SEARCH_URL}${name}?fields=name,capital,population,flags,languages`;
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        } else {
            return response.json();
        }
    })
}

function onInput(e) {
    const inputValue = inputEl.value.trim();
    if (inputValue === '') {
        listEl.innerHTML = '';
        Notify.warning('blablabla');
        return;
    }
    fetchCountries(inputValue).then(data => {
        if (data.length > 10) {
            Notify.info('Too many matches found. Please enter a more specific name.')
        }
        if (data.length >= 2 && data.length <= 10) {
            Notify.success('good')
        }
    }).catch(console.log);
}

function possibleCountriesMrkup() {
    
}

function chosenCountryMarkup() {

}