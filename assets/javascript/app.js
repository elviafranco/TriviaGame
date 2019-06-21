// Selected HTML tags + Variables

const quiz = document.getElementById("quiz");
const submit = document.getElementById("submit");
const results = document.getElementById("answers");
const questions = [

    {
        question: "1. Which character did Tarantino play in Reservoir Dogs?",
        answers: {
            a: "Mr.Blonde",
            b: "Mr.Orange",
            c: "Mr.Brown",
            d: "Mr.Pink",
        },
        correctAnswer: "c"
    },
    {
        question: "2. Name John Travolta's character in Pulp Fiction.",
        answers: {
            a: "Jules Winnfield",
            b: "Windston Wolfe",
            c: "Butch Coolidge",
            d: "Vincent Vega",
        },
        correctAnswer: "d"
    },
    {
        question: "3. What do the French call a Quarter Pounder with Cheese, according to Travolta's character in Pulp Fiction?",
        answers: {
            a: "Royale with cheese",
            b: "XL with cheese",
            c: "Extra King with cheese",
            d: "King with cheese",
        },
        correctAnswer: "a"
    },
    {
        question: "4. Name the team of assassins that The Bride was formerly a member of in Kill Bill Vol 1.",
        answers: {
            a: "Suicide Squad",
            b: "Deadly Viper Assassination Squad",
            c: "The League of Assassins",
            d: "The Strike Team",
        },
        correctAnswer: "b"
    },
    {
        question: "5. The Bride travels to Okinawa to obtain a sword made by which legendary swordsmith?",
        answers: {
            a: "Ra's Al Ghul",
            b: "Gogo Yubari",
            c: "Boss Tanaka ",
            d: "Hattori Hanzo",
        },
        correctAnswer: "d"
    },
    {
        question: "6. What technique does The Bride use to finally kill Bill?",
        answers: {
            a: "Pressure Point Knock Out",
            b: "Crane Kick",
            c: "The Five Point Palm Exploding Heart Technique ",
            d: "Karate Death Chop",
        },
        correctAnswer: "c"
    },
    {
        question: "7. Which character from Reservoir Dogs refused to tip for breakfast in the opening scene?",
        answers: {
            a: "Mr. Pink",
            b: "Mr. Orange",
            c: "Mr. White",
            d: "Mr. Brown",
        },
        correctAnswer: "a"
    },

];


$('#submit').hide();
$('#timeleft').hide();


// On Click Function w/ Timer
$("#start").click(function () {
    $('#submit').show();
    $('#start').hide();
    $('#timeleft').show();
    var timeleft = 20;
    var timer = setInterval(function () {
        timeleft--;
        document.getElementById("time").textContent = timeleft;
        if (timeleft <= 0)
            clearInterval(timer)

    }, 1000)


    // Second time function to display results after 10 seconds
    window.setTimeout(function () {
        $('#time').hide();
        $('#timeleft').hide();
        $('#quiz').hide();
        $('#submit').hide();
        displayResults();
        clearTimeout();
    }, 20000);


    // This function will display the quiz 
    function displayQuiz() {
        const output = [];


        questions.forEach(
            (currentQuestion, questionNumber) => {


                const answers = [];


                for (letter in currentQuestion.answers) {


                    answers.push(
                        `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label><br>`
                    );
                }


                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join('')} </div><br>`
                );
            }
        );


        quiz.innerHTML = output.join('');

    }


    function displayResults() {

        const answerContainers = quiz.querySelectorAll('.answers');

        let numCorrect = 0;

        questions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = 'input[name=question' + questionNumber + ']:checked';
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {

                numCorrect++;

            }

        });


        results.innerHTML = "Total Score = " + numCorrect + ' out of ' + questions.length;
    }

    // This is calling the function to display the quiz
    displayQuiz();

    // This is like the on click event when results are submitted.
    $("#submit").click(function () {
        displayResults();
        $('#quiz').hide();
        $('#submit').hide();
        $('#time').hide();
        $('#timeleft').hide();

    })

    // submit.addEventListener("click", displayResults)





}
)

