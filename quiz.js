const questions=[
{
question:"HTML stands for _____?",
answers:[
{text:"Hypermark Language",correct:false},
{text:"Hypermix Language",correct:false},
{text:"Hypertext Markup Language",correct:true},
{text:"Hypertension Language",correct:false},
],
},

{
question:"The property in CSS used to change the background color of an element is -",
answers:[
{text:"bgcolor",correct:false},
{text:"color",correct:false},
{text:"background-color",correct:true},
{text:"All the above",correct:false},
],
},

{
question:"The property in CSS used to change the text color of an element is -",
answers:[
{text:"bgcolor",correct:false},
{text:"color",correct:true},
{text:"background-color",correct:false},
{text:"All the above",correct:false},
],
},

{
question:"The CSS property used to control the element's font-size is -",
answers:[
{text:"None of the above",correct:false},
{text:"text-style",correct:false},
{text:"text-size",correct:false},
{text:"font-size",correct:true},
],
},

{
question:"The HTML attribute used to define the inline styles is -",
answers:[
{text:"style",correct:true},
{text:"styles",correct:false},
{text:"class",correct:false},
{text:"None of the above",correct:false},
],
},

{
question:" Which of the following CSS property is used to set the background image of an element?",
answers:[
{text:"background-attachment",correct:false},
{text:"background-image",correct:true},
{text:"background-color",correct:false},
{text:"None of the above",correct:false},
],
},

{
question:"Which type of JavaScript language is ___",
answers:[
{text:"Object-Oriented",correct:false},
{text:"Object-Based",correct:true},
{text:"Assembly-language",correct:false},
{text:"High-level",correct:false},
],
},

{
question:"Which of the following type of a variable is volatile?",
answers:[
{text:"Mutable variable",correct:true},
{text:"Dynamic variable",correct:false},
{text:"Volatile variable",correct:false},
{text:"Immutable variable",correct:false},
],
},

{
question:"In the JavaScript, which one of the following is not considered as an error:",
answers:[
{text:"Syntax error",correct:false},
{text:"Missing of semicolons",correct:false},
{text:"Division by zero",correct:true},
{text:"Missing of Bracket",correct:false},
],
},

{
question:"Which one of the following operator is used to check weather a specific property exists or not:",
answers:[
{text:"Exists",correct:false},
{text:"exist",correct:false},
{text:"within",correct:false},
{text:"in",correct:true},
]
}

];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score=0;

function startQuiz(){
currentQuestionIndex =0;
score=0;
nextButton.innerHTML = "Next";
showQuestion();
}

function showQuestion(){
resetState();
let currentQuestion=questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

currentQuestion.answers.forEach((answer)=> {
  const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
if(answer.correct){
   button.dataset.correct=answer.correct;
}
  button.addEventListener("click",selectAnswer);
});
}


function resetState(){
nextButton.style.display="none";
while(answerButtons.firstChild){
  answerButtons.removeChild(answerButtons.firstChild);
}
}

function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct ==="true";
if(isCorrect){
selectedBtn.classList.add("correct");
score++;
}
else
{
selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach((button) => {
if(button.dataset.correct === "true"){
button.classList.add("correct");
}
button.disabled=true;
});
nextButton.style.display="block";
}

function showScore(){
resetState();
questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
nextButton.innerHTML="Play Again";
nextButton.style.display="block";
}

function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex<questions.length){
   showQuestion();
}
else
{
showScore();
}
}

nextButton.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length){
handleNextButton()
}
else
{
startQuiz();
}
});
startQuiz();