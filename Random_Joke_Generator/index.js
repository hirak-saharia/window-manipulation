const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = '28iVkjFXfC8DRVubdAlipA==D5WPecl3QWYrMYmx';


const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    },
};

const apiURL = 'https://api.api-ninjas.com/v1/jokes?limit=1';

async function getJoke() {
    try {
        jokeEl.innerText = 'Updating...';
        btnEl.disabled = true;
        btnEl.innerText = 'Loading...';
        // console.log('clicked')
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = 'Tell me a Joke';
        // console.log(data[0].joke);
        jokeEl.innerText = data[0].joke;
} catch (error) {
    jokeEl.innerText = 'An error occures, try again later';
    btnEl.disabled = false;
    btnEl.innerText = 'Tell me a Joke';
    console.log(error);
}

};


btnEl.addEventListener('click', getJoke);