let pintas = ["\u2660", "\u2663", "\u2665", "\u2666"]
let cartas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q"]

let randomNumberPintas = Math.floor(Math.random() * pintas.length);
let randomNumberCartas = Math.floor(Math.random() * cartas.length);

let randomPintas = pintas[randomNumberPintas]
let randomCartas = cartas[randomNumberCartas]

let poker1 = document.querySelector(".top-suit");
poker1.innerHTML = randomPintas
let poker2 = document.querySelector(".number");
poker2.innerHTML = randomCartas
let poker3 = document.querySelector(".bottom");
poker3.innerHTML = randomPintas

if( randomPintas === "\u2665" || randomPintas === "\u2666"){
    poker1.style.color = "red"
    poker3.style.color = "red"
}

console.log(`${randomPintas} - ${randomCartas} - ${randomPintas}`);


