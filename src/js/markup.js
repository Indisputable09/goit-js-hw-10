function possibleCountriesMarkup(data) {
    const markup = data.map(({flags, name}) => {
        const flagsEl = Object.values(flags.svg).join('');
        const nameEl = name.official
        return `<li>
        <h2 class = "small__text">
        <span class = "small__img"><img src="${flagsEl}" alt="country flag" width = "30"/></span>${nameEl}
        </h2></li>`
    }).join('');
    listEl.innerHTML = markup;
}

function chosenCountryMarkup(data) {
    const markup = data.map(({ languages, flags, name, capital, population }) => {
        const languagesEl = Object.values(languages).join(", ");
        const numberOfLanguages = Object.keys(languages);
        const flagsEl = Object.values(flags.svg).join('');
        const nameEl = name.official;

        if (numberOfLanguages.length > 1) {
            return `<li>
        <h1>
        <span class = "original__img"><img src="${flagsEl}" alt="country flag" width = "40"/></span>${nameEl}
        </h1>
      <p><strong>Capital:</strong> ${capital}</p>
      <p><strong>Population:</strong> ${population}</p>
      <p><strong>Languages:</strong> ${languagesEl}</p>
      </li>`
            
        }
        else {
            return `<li>
        <h1>
        <span class = "original__img"><img src="${flagsEl}" alt="country flag" width = "40"/></span>${nameEl}
        </h1>
      <p><strong>Capital:</strong> ${capital}</p>
      <p><strong>Population:</strong> ${population}</p>
      <p><strong>Language:</strong> ${languagesEl}</p>
      </li>`
        }
        
    }).join('');
    listEl.innerHTML = markup;
}

export function correctMarkup(data) {
    {
        if (data.length > 10) {
            Notify.info('Too many matches found. Please enter a more specific name.')
            listEl.innerHTML = '';
        }
        if (data.length >= 2 && data.length <= 10) {
            possibleCountriesMarkup(data);
        }
        if (data.length == 1) {
            chosenCountryMarkup(data);
        }
    }
}