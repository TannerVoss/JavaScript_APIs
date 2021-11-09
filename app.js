/*
let search = document.getElementById("search");
addEventListener("click", search);

let img = document.getElementById("img");

let giphy = document.getElementById("giphy").value;


fetch('https://api.giphy.com/v1/gifs/translate?api_key=O7RUckxpbhC7hbzZgKuFX3TYAAWnMivA&s=${search}', { mode: "cors" });


.then((response) => response.json())
        .then((result) => (imageSRC = result.data.images.original.url))
        .catch((error) => console.log(error)); */


console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// API = O7RUckxpbhC7hbzZgKuFX3TYAAWnMivA


let input = document.querySelector("#giphySearch");
let gif = document.getElementById("gif");
const btn = document.querySelector("#searchBtn");

//let searchBtn = document.getElementById("searchBtn").addEventListener("click");
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=O7RUckxpbhC7hbzZgKuFX3TYAAWnMivA&s=${giphySearch.value}`, {
            mode: "cors",
        })
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            return (gif.src = response.data.images.original.url);
        })
        .catch(function(reject) {
            console.log(reject);
        });
});