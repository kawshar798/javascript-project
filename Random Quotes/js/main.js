(function(){
const quote_btn = document.querySelector(".crt-btn");

const show_quote = document.querySelector(".show_quote");
const author_s = document.querySelector(".author");
const quotes = [
    {
        quote:"Don't cry because it's over, smile because it happened.",
        author:'Dr. Seuss'
    },
    {
        quote:"Be yourself; everyone else is already taken.",
        author:'Oscar Wilde'
    }
    , {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        author:'Albert Einstein'
    },
    {
        quote:"So many books, so little time.",
        author:'Frank Zappa'
    },
    {
        quote:"A room without books is like a body without a soul.",
        author:' Marcus Tullius Cicero'
    },
    {
        quote:"It is better to be hated for what you are than to be loved for what you are not.",
        author:'Andre Gide, Autumn Leaves'
    },
    {
        quote:"Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author:'Mark Twain'
    }
];

quote_btn.addEventListener('click',function(){
let random = Math.floor(Math.random() * quotes.length);
show_quote.textContent = quotes[random].quote;
author_s.textContent   = quotes[random].author;
console.log(random);
});



})();