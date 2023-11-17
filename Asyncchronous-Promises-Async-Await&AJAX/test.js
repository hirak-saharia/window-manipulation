'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  // country 1
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // country 2
      return fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
      );
      //   return 23;
    })
    // .then(data => alert(data));
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      //   console.error(`${err} ☹☹☹`);
      renderError(`Something went wrong ☹☹☹ ${err.message}.Try again!`);
    });
};

btn.addEventListener('click', function () {
  // getCountryData('portugal');
  getCountryData('portugal');
});
