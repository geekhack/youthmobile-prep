var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

//select elements
var container = document.querySelector('#quizContainer');
var questionEl = document.querySelector('#question');
var opt1 = document.querySelector('#opt1');
var opt2 = document.querySelector('#opt2');
var opt3 = document.querySelector('#opt3');
var opt4 = document.querySelector('#opt4');
var nextButton = document.querySelector('#nextButton');
var displayResult = document.querySelector('#result');

//write loadQuestion function
function loadQuestion(questionIndex){
  var q = questions[questionIndex];
  questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
};

//write loadNextQuestion function 
function loadNextQuestion(){
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if(!selectedOption){
    alert('Please select choose an option!');
    return;
  }
  var answer = selectedOption.value;
  if(questions[currentQuestion].answer == answer){
    score += 10;
  }
  selectedOption.checked = false;
  currentQuestion++;
  if(currentQuestion == totalQuestions -1){
    nextButton.textContent = 'Finish';
  }
  if(currentQuestion == totalQuestions){
    container.style.display = 'none';
    displayResult.style.display = '';
    displayResult.textContent = 'Your score is: ' + score + ' marks'; 
    return;
  }
  loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);