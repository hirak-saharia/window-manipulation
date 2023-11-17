// Our first AJAX Call: XMLHttpRequest

// API >>> https://countries-api-836d.onrender.com/countries

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
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1; // fade in the container
};

// error message
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1; // fade in the container
};

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest(); // old way
  // next we need a URL to make AJAX call -- https://github.com/public-apis/public-apis
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  // now send it
  request.send();

  // register a callback on the request object for the load event
  request.addEventListener('load', function () {
    //   console.log(this.responseText);

    // convert json result to an actual JavaScript Object
    // const data = JSON.parse(this.responseText);
    const [data] = JSON.parse(this.responseText); // dstructering
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour coutry 2
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest(); // old way
    // next we need a URL to make AJAX call -- https://github.com/public-apis/public-apis
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    // now send it
    request2.send();

    request2.addEventListener('load', function () {
      //   console.log(this.responseText);
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

*/

/*But now imagine that we wanted to do more requests in sequence, like the neighbor of the neighbor of the neighbor, and like 10 times over. So in that case, we would end up with callbacks inside of callbacks inside of callbacks, like 10 times.

    - We have a special name callback hell function - to execute asynchronus tasks in sequence when we habe a lot of nested callback.*/
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// cons- it makes code look very messay, hard to maintain, difficult to understand

// And fortunately for us, since ES6, there is actually a way of escaping callback hell by using something called promises.

// > Promises and the Fetch API - To escape callback hell
// old way
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// new way using fetch
// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// Promise > a container for an asynchronous delivered value / or a container for a future value --- example a lottery ticket > Lottery draw happens asynchronously > if correct outcome, i recv money becoz it was promissed
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       // to read response data from body call JSON method
//       return response.json(); // new promise
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

/*
// a Highly simplified cleaner version
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
getCountryData('portugal');
*/

// Chaining Promises

// // error message
// const renderError = function (msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg);
//     countriesContainer.style.opacity = 1;
// };

// helper function will wrap us the fetch the error handling, and also the conversion to JSON
const getJSON = function (url, errorMsg = 'Something went wrong ') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       //   const neighbour = data[0].borders[0];
//       const neighbour = 'dssdfsfh';

//       if (!neighbour) return;

//       // country 2
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       );
//       //   return 23;
//     })
//     // .then(data => alert(data));
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();

//       //   response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} ☹☹☹`);
//       renderError(`Something went wrong ☹☹☹ ${err.message}.Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // country 1
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      //   const neighbour = 'dssdfsfh';

      //   if (!neighbour) return;
      if (!neighbour) throw new Error('No neighbour found!');

      // country 2
      return getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
        'Country not found'
      );
      //   return 23;
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} ☹☹☹`);
      renderError(`Something went wrong ☹☹☹ ${err.message}.Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  // getCountryData('portugal');
  getCountryData('portugal');
});
// when there is no neighbour
getCountryData('australia'); // trying to render a country that does not exist

// let's simulate another error - So let's say that we're trying to search for a country that simply doesn't exist. And so, or API is not gonna find any result for that.
// getCountryData('jdhgfifgd');

// Handling Rejected Promises - Handling errors in Promises
// - when a user loses internet connection
// Go to Network > change Dissable to Offline
