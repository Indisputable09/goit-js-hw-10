import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import correctMarkup from "./js/markup";
import {catchError} from "./js/markup";
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
    const inputValue = inputEl.value.trim();
    if (inputValue === '') {
        listEl.innerHTML = '';
        return;
    }
    fetchCountries(inputValue).then(correctMarkup).catch(catchError)
}