export default function fetchCountries(name) {
    const SEARCH_URL = 'https://restcountries.com/v3.1/name/';
    const url = `${SEARCH_URL}${name}?fields=name,capital,population,flags,languages`;
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        } else {
            return response.json();
        }
    })
}