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
}

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

//quiz java start
// Wait until site is loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select important elements from the HTML
    const quizContainer = document.getElementById("quiz-container"); // div holds quiz questions
    const submitButton = document.getElementById("submit-btn"); // button submits quiz 
    const scoreDisplay = document.getElementById("score"); // shows score

    // array that stores the quiz questions, answer options, and correct answers
    const quizQuestions = [
        {
            question: "Which agency did Nixon establish to protect the environment?",
            options: ["EPA", "FBI", "NASA", "CIA"],
            answer: "EPA"
        },
        {
            question: "What major foreign policy achievement is Nixon known for?",
            options: ["D-Day", "Visit to China", "Ending Vietnam War", "Cuban Missile Crisis"],
            answer: "Visit to China"
        },
        {
            question: "What scandal led to Nixon's resignation?",
            options: ["Watergate", "Iran-Contra", "Teapot Dome", "Pentagon Papers"],
            answer: "Watergate"
        },
        {
            question: "In which year did Nixon resign from the presidency?",
            options: ["1969", "1972", "1974", "1976"],
            answer: "1974"
        }
    ];

    // Function to generate quiz questions dynamically
    function loadQuiz() {
        // Loop through each question in the array
        quizQuestions.forEach((q, index) => {
            // Create a div to hold each question and its options
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("mt-3");

            // Create and add the question text
            const questionText = document.createElement("h4");
            questionText.textContent = `${index + 1}. ${q.question}`;
            questionDiv.appendChild(questionText);

            // Loop through answer options and create radio buttons
            q.options.forEach(option => {
                const label = document.createElement("label");
                label.classList.add("d-block"); // Makes each option appear on a new line

                const input = document.createElement("input");
                input.type = "radio"; // Radio button input
                input.name = `question${index}`; // Grouping by question index to allow only one selection per question
                input.value = option; // Assign value for checking the answer

                // Append the radio button to the label and then add the label to the question div
                label.appendChild(input);
                label.append(` ${option}`);
                questionDiv.appendChild(label);
            });

            // Append the whole question section to the quiz container in HTML
            quizContainer.appendChild(questionDiv);
        });
    }

    // Function to check the user's answers and calculate score
    function checkAnswers() {
        let score = 0; // Variable to keep track of correct answers

        // Loop through each question and check the user's selected answer
        quizQuestions.forEach((q, index) => {
            // Get the selected answer for the current question
            const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
            
            // Compare selected answer with the correct answer
            if (selectedAnswer && selectedAnswer.value === q.answer) {
                score++; // Increase score if the answer is correct
            }
        });

        // Display the final score to the user
        scoreDisplay.textContent = `You scored ${score} out of ${quizQuestions.length}!`;
    }

    // Add event listener to the submit button to trigger score calculation when clicked
    submitButton.addEventListener("click", checkAnswers);

    // Call function to load quiz questions when the page is loaded
    loadQuiz();
});

