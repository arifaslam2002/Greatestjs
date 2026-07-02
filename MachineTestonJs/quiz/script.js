const questions = [
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS",
  },
  {
    question: "Which JavaScript method is used to select an element by its ID?",
    options: [
      "querySelector()",
      "getElementById()",
      "getElementsByClassName()",
      "getElementsByTagName()",
    ],
    answer: "getElementById()",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["-", "#", "//", "**"],
    answer: "//",
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "push()",
  },
];

let currentQuestion = 0;
let score = 0;
const questionDiv = document.getElementById("question");
function showQuestion() {
  questionDiv.innerHTML = "";
  const ques = questions[currentQuestion];
  const p = document.createElement("h2");
  p.textContent = ques.question;
  questionDiv.appendChild(p);
  ques.options.forEach((option) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.value = option;

    label.appendChild(radio);
    label.append(" " + option);

    questionDiv.appendChild(label);
    questionDiv.appendChild(document.createElement("br"));
  });
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.addEventListener("click", nextQuestion);
  questionDiv.appendChild(document.createElement("br"));
  questionDiv.appendChild(nextBtn);
}
function nextQuestion(){
    const selected = document.querySelector('input[name="option"]:checked')
    if(!selected){
        alert("Please Select an Answer");
        return
    }
    if(selected.value === questions[currentQuestion].answer){
        score++
    }
        currentQuestion++
    if(currentQuestion < questions.length){
        showQuestion();
    }else{
         questionDiv.innerHTML = `
            <h2>Quiz Finished</h2>
            <h3>Your Score: ${score}/${questions.length}</h3>
        `
    }
}
showQuestion()