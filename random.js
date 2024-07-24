
let quoteText = document.getElementsByTagName("h1")[0];
let author = document.getElementsByTagName("h2")[0];
let next = document.getElementsByTagName("button")[1];
let previous = document.getElementsByTagName("button")[0];
let savedQuote = '';
window.onload = randomQuote();

async function randomQuote(){
    // Save the previous quote in local storage

    sessionStorage.setItem('quote', quoteText.textContent);
    sessionStorage.setItem('author', quoteText.textContent);

    // Query the API for a new quote
    let url = 'https://api.quotable.io/random';
    let response = await fetch(url);
    let quoteContent = await response.json();
    // console.log(quoteContent.content);
    // console.log(quoteContent.arthur);

    // Write the new quote to HTML
    quoteText.innerHTML = quoteContent.content
    author.innerHTML = '- ' + quoteContent.author;
}

function getQuote(){
    // write the previous quote to HTML
    quoteText.innerHTML = sessionStorage.getItem('quote');
    author.innerHTML = sessionStorage.getItem('author');
};
    

// console.log(sessionStorage.getItem('quote'));
next.addEventListener('click', randomQuote);
previous.addEventListener('click', getQuote);

// randomQuote();