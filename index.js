// Qoute Genarator
//Key concepts for Project
//document.querySelector(), addEventListener(), Math Object(), innertext.

//Variable
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('#quote');
let author = document.querySelector('#author');
let tweet = document.querySelector('#tweetMe');

// fetch("https://type.fit/api/quotes")
let realData = "";
let quotesData = "";

const tweetNow = () => {
    const tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
    window.open(tweetPost);
}

const getNewQuotes = () => { //
    let rnum = Math.floor(Math.random() * 1000); // Math.random generate random number
    quotesData = realData[rnum];
    quote.innerText = `${quotesData.text}`;
    quotesData.author === null ? (author.innerText = "unKnown") : (author.innerText = `${quotesData.author}`);
    
    // quote.innerText = realData[rnum].text;
    // person.innerText = realData[rnum].author;
    // console.log(realData[rnum].text);
}
const getQuotes = async () => {
    const api = 'https://type.fit/api/quotes';
    try {
        let data = await fetch(api);
        realData = await data.json(); //converting readable string into Json Object

        getNewQuotes();
        // console.log(realData[100].text);
    
    } catch (error) {
        console.log(error)
    }
    
}
getQuotes();
btn.addEventListener("click", getNewQuotes)
tweet.addEventListener("click", tweetNow)

    // .catch(function(err) {
    //     console.log(err);
    // })
// const quotes = [{
//     quote: `"The best way to find yourself is to lose yourself in the service of others."`,
//     person: `Mahatma Gandhi`
// }, {
//     quote: `"If you want to live a happy life, tie it to a goal, not to people or things"`,
//     person: `Albert Einstain`
// }, {
//     quote: `"At his best, man is the noblest of all animals; seperated from law and justice he is the worst."`,
//     person: `Aristotle`
// }, {
//     quote: `"Your time is limited, so dont waste it living someone else's life"`,
//     person: `Steve Jobs`
// }, {
//     quote: `"Remember that not getting what you want is sometimes a wonderful strock of luck"`,
//     person: `Dalai Lama`
// }, {
//     quote: `"Nothing is worth then, the day you know what you want"`,
//     person: `Usaching Marma` 
// },
// ];

// btn.addEventListener('click', function() {
//     let random = Math.floor(Math.random() * quotes.length);

//     quote.innerText = quotes[random].quote;
//     person.innerText = quotes[random].person;
    
// })
