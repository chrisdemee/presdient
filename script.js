const nixonQuotes = [
    "The greatest honor history can bestow is the title of peacemaker.",
    "A man is not finished when he is defeated. He is finished when he quits.",
    "Only if you have been in the deepest valley can you ever know how magnificent it is to be on the highest mountain.",
    "If you want to make beautiful music, you must play the black and the white notes together.",
    "The presidency has many problems, but boredom is the least of them."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * nixonQuotes.length);
    document.getElementById("quoteDisplay").innerText = nixonQuotes[randomIndex];
}7

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("quoteDisplay").innerText = nixonQuotes[0]; // show the first quote when site loads
    document.getElementById("generateQuote").addEventListener("click", getRandomQuote);
});
