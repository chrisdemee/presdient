// array stores nixon's quotes
const nixonQuotes = [
    "The greatest honor history can bestow is the title of peacemaker.",
    "A man is not finished when he is defeated. He is finished when he quits.",
    "Only if you have been in the deepest valley can you ever know how magnificent it is to be on the highest mountain.",
    "If you want to make beautiful music, you must play the black and the white notes together.",
    "The presidency has many problems, but boredom is the least of them."
];

// function that selects a random quote and displays it
function getRandomQuote() {
    //generates random index
    const randomIndex = Math.floor(Math.random() * nixonQuotes.length); 
    //updates displayed quote
    document.getElementById("quoteDisplay").innerText = nixonQuotes[randomIndex]; 
}

// event listener that waits until page is fully loaded before running script
document.addEventListener("DOMContentLoaded", function() {
    //sets default quote
    document.getElementById("quoteDisplay").innerText = nixonQuotes[0]; 
    //changes quote on button click
    document.getElementById("generateQuote").addEventListener("click", getRandomQuote); 
});

document.addEventListener("DOMContentLoaded", function () {
    
});

// waits until site is loaded before running the quiz script
document.addEventListener("DOMContentLoaded", () => {
    // selects elements from the html
     // div holds quiz questions
    const quizContainer = document.getElementById("quiz-container");
    // button submits quiz
    const submitButton = document.getElementById("submit-btn"); 
    // shows score
    const scoreDisplay = document.getElementById("score");

    // array stores quiz questions, answer options, and correct answers
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

    // function that generates quiz questions dynamically
    function loadQuiz() {
        // loop that iterates through each quiz question
        quizQuestions.forEach((q, index) => {
            //creates div for the question
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("mt-3");

            //creates and adds question text
            const questionText = document.createElement("h4");
            questionText.textContent = `${index + 1}. ${q.question}`; // template literals: adds dynamic numbering
            questionDiv.appendChild(questionText);

            // loop that iterates through answer options and creates radio buttons
            q.options.forEach(option => {
                const label = document.createElement("label"); //creates label for radio button
                label.classList.add("d-block"); //makes each option appear on a new line

                const input = document.createElement("input"); 
                // makes radio button
                input.type = "radio"; 
                // scope that groups radio buttons by question number
                input.name = `question${index}`; 
                 // assigns the option value
                input.value = option;

                label.appendChild(input); // ttaches radio button to label
                label.append(` ${option}`); // string that adds text next to radio button
                questionDiv.appendChild(label); // dom manipulation: appends label to question div
            });

            quizContainer.appendChild(questionDiv); //adds the entire question section to quiz container
        });
    }

    // function that checks user's answers and calculates score
    function checkAnswers() {
        let score = 0; // variable that tracks number of correct answers

        // loop that iterates through each quiz question
        quizQuestions.forEach((q, index) => {
            //gets selected answer for current question
            const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
            
            // if statement condition checks if selected answer matches the correct answer
            if (selectedAnswer && selectedAnswer.value === q.answer) {
                score++; // increments score if answer is correct
            }
        });

        // displays final score
        scoreDisplay.textContent = `You scored ${score} out of ${quizQuestions.length}!`;
    }

    //  runs checkAnswers function when submit button is clicked
    submitButton.addEventListener("click", checkAnswers);

    // calls function, loads quiz questions when page is loaded
    loadQuiz();
});
