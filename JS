const questions = [
  {
    question: "あなたは普段、社交的ですか？",
    choices: ["はい", "いいえ"],
    answer: null
  },
  {
    question: "問題が起きた時、冷静に対処できますか？",
    choices: ["はい", "いいえ"],
    answer: null
  },
  {
    question: "計画を立てるのは得意ですか？",
    choices: ["はい", "いいえ"],
    answer: null
  }
];

let currentQuestionIndex = 0;

function showQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;
  
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = ""; // Clear previous choices

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.onclick = () => selectAnswer(index);
    choicesContainer.appendChild(button);
  });

  document.getElementById("next-btn").style.display = 'none'; // Hide next button initially
}

function selectAnswer(choiceIndex) {
  questions[currentQuestionIndex].answer = choiceIndex;
  document.getElementById("next-btn").style.display = 'block'; // Show next button after selection
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let score = 0;

  questions.forEach(question => {
    if (question.answer === 0) {
      score++;
    }
  });

  let resultText = "";

  if (score === questions.length) {
    resultText = "あなたはとても社交的で計画的です！";
  } else if (score === 0) {
    resultText = "あなたは落ち着いて、問題を冷静に解決できるタイプです。";
  } else {
    resultText = "あなたはバランスの取れた性格を持っています。";
  }

  document.getElementById("result-text").textContent = resultText;
  document.getElementById("quiz-container").style.display = 'none';
  document.getElementById("result").style.display = 'block';
}

function restartQuiz() {
  currentQuestionIndex = 0;
  questions.forEach(q => q.answer = null); // Reset answers
  document.getElementById("quiz-container").style.display = 'block';
  document.getElementById("result").style.display = 'none';
  showQuestion();
}

// 初回の質問を表示
showQuestion();
