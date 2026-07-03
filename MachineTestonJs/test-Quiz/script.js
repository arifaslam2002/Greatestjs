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

let score=0;
let currentQuestion =0;

let questionDiv = document.getElementById("question")

function showQuestion(){
  ques = questions[currentQuestion]
  questionDiv.innerHTML =""
  const para = document.createElement("h2")
  para.innerHTML = ques.question
  questionDiv.appendChild(para)
  para.classList.add("para")
  ques.options.forEach((option) => {
    const radio = document.createElement("input")
    const label = document.createElement("label")
   radio.type = "radio"
   radio.name ="option"
   radio.value=option

   label.appendChild(radio)
   label.append(" "+option)
   label.appendChild(document.createElement("br"))
   questionDiv.appendChild(label)
   label.classList.add("label")
  });
  questionDiv.appendChild(document.createElement("br"))
  const nextBtn = document.createElement("button")
  nextBtn.textContent ="Next Question"
  questionDiv.appendChild(nextBtn)
  nextBtn.classList.add("nextBtn")
  nextBtn.addEventListener("click",nextQuestion)
}
function nextQuestion(){
    const selected = document.querySelector('input[name=option]:checked')
    if(!selected){
        alert("Choose An Answer")
        return
    }
    if(selected.value == questions[currentQuestion].answer){
        score++
    }
    currentQuestion++
    if(currentQuestion < questions.length){
     showQuestion()
    }else
        {
        questionDiv.innerHTML =""
        const SuccessDiv = document.createElement("div")
        SuccessDiv.innerHTML =`
        <h2>Quiz Completed SuccessFully</h2>
        <p>Score:${score}/${questions.length}
        `
        questionDiv.appendChild(SuccessDiv)
        SuccessDiv.classList.add("successDiv")
    }
}
showQuestion()