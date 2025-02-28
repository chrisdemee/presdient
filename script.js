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

document.addEventListener("DOMContentLoaded", function () {
    const facts = [
        "Nixon was the first U.S. president to visit China.",
        "He played five musical instruments, including the piano.",
        "Nixon founded the Environmental Protection Agency (EPA).",
        "He was a Quaker and didn't drink alcohol.",
        "Nixon was an accomplished poker player during his Navy years."
    ];
    
    const factText = document.getElementById("fact");
    const hiddenContent = document.getElementById("hiddenContent");
    const factButton = document.getElementById("factButton");
    
    factButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factText.textContent = facts[randomIndex];
        hiddenContent.style.display = "block";
    });
});
