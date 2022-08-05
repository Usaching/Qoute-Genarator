// Qoute Genarator
//Key concepts for Project
//document.querySelector(), addEventListener(), Math Object(), innertext.

//Variable
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things"`,
    person: `Albert Einstain`
}, {
    quote: `"At his best, man is the noblest of all animals; seperated from law and justice he is the worst."`,
    person: `Aristotle`
}, {
    quote: `"Your time is limited, so dont waste it living someone else's life"`,
    person: `Steve Jobs`
}, {
    quote: `"Remember that not getting what you want is sometimes a wonderful strock of luck"`,
    person: `Dalai Lama`
}, {
    quote: `"Nothing is worth then, the day you know what you want"`,
    person: `Usaching Marma` 
},
];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    
})
