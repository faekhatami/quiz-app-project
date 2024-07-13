const questionEl = document.querySelector(".question");
const answerButtons = document.querySelectorAll(".answers button");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Madrid", "Rome", "Paris", "Berlin"],
    correct: 2,
  },
];

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.onclick = () => {
      if (index === currentQuestion.correct) score++;
      nextQuestion();
    };
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  questionEl.textContent = `You scored ${score} out of ${questions.length}`;
  document.querySelector(".answers").style.display = "none";
  submitButton.style.display = "block";
}

loadQuestion();
nextButton.onclick = nextQuestion;
submitButton.onclick = () => alert("Quiz submitted!");
